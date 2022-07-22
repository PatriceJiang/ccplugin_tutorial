

set(_HELLO_COCOS_GLUE_SRC_DIR ${CMAKE_CURRENT_LIST_DIR})


add_library(aes STATIC IMPORTED GLOBAL)
set_target_properties(aes PROPERTIES
    IMPORTED_LOCATION ${_HELLO_COCOS_GLUE_SRC_DIR}/${ANDROID_ABI}/lib/libaes.a
)

include(${_HELLO_COCOS_GLUE_SRC_DIR}/../src/CMakeLists.txt)