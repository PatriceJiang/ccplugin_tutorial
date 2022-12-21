
#include "hello_cocos.h"
#include "bindings/sebind/sebind.h"
#include "cocos.h"
#if defined(COCOS_VERSION)  // && COCOS_VERSION >= 30700
  #include "engine/EngineEvents.h"
#else
// 3.6.x
  #include "plugins/bus/EventBus.h"
#endif
#include "plugins/Plugins.h"

// export c++ methods to JS
static bool register_demo(se::Object *ns) {

  sebind::class_<Demo> klass("Demo");

  klass.constructor<const char *>()
      .function("hello", &Demo::hello);
  klass.install(ns);
  return true;
}
#if defined(COCOS_VERSION) 
// 3.7.x+
void add_demo_class() {
  static cc::events::ScriptEngine::Listener listener;
  listener.bind([](cc::ScriptEngineEvent event) {
    if (event == cc::ScriptEngineEvent::AFTER_INIT) {
      se::ScriptEngine::getInstance()->addRegisterCallback(register_demo);
    }
  });
}

#else
// 3.6.x
void add_demo_class() {
  using namespace cc::plugin;
  static Listener listener(BusType::SCRIPT_ENGINE);
  listener.receive([](ScriptEngineEvent event) {
    if (event == ScriptEngineEvent::POST_INIT) {
      se::ScriptEngine::getInstance()->addRegisterCallback(register_demo);
    }
  });
}

#endif

/**
 * Regist a new cc plugin entry function
 * first  param: should match the name in cc_plugin.json
 * second param: callback when engine initialized
 */ 
CC_PLUGIN_ENTRY(hello_cocos_glue, add_demo_class);
