#include "AES.h"
#include "bindings/sebind/sebind.h"
#include "plugins/bus/EventBus.h"
#include "plugins/Plugins.h"

namespace {

std::vector<uint8_t> key = {0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07,
                            0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07,
                            0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07,
                            0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07};

std::vector<uint8_t> skipBytes = {1, 2,  3,  4,  5,  6,  7,  8,
                                  9, 10, 11, 12, 13, 14, 15, 16};

AES *aesConstructor() { return new AES(AESKeyLength::AES_256); }
std::vector<uint8_t> aesEncrypt(AES *aes, const std::vector<uint8_t> &input) {
  std::vector<uint8_t> copy = input;
  // padding
  auto appendSize = 16 - input.size() % 16;
  copy.insert(copy.end(), skipBytes.begin(), skipBytes.begin() + appendSize);
  return aes->EncryptECB(copy, key);
}

std::vector<uint8_t> aesDecrypt(AES *aes, const std::vector<uint8_t> &data) {
  std::vector<uint8_t> dec= aes->DecryptECB(data, key);
  // erase padding
  auto padding = dec.back();
  dec.erase(dec.end() - padding, dec.end());
  return dec;
}

} // namespace

// export c++ methods to JS
static bool register_aes(se::Object *ns) {

  sebind::class_<AES> klass("AES");

  klass.constructor()
      .function("encrypt", aesEncrypt)
      .function("decrypt", aesDecrypt);
  klass.install(ns);
  return true;
}

void add_aes_glue() {
  using namespace cc::plugin;
  static Listener listener(BusType::SCRIPT_ENGINE);
  listener.receive([](ScriptEngineEvent event) {
    if (event == ScriptEngineEvent::POST_INIT) {
      se::ScriptEngine::getInstance()->addRegisterCallback(register_aes);
    }
  });
}

/**
 * Regist a new cc plugin entry function
 * first  param: should match the name in cc_plugin.json
 * second param: callback when engine initialized
 */
CC_PLUGIN_ENTRY(aes_glue, add_aes_glue);
