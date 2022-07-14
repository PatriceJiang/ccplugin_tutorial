

set(_AES_GLUE_DIR ${CMAKE_CURRENT_LIST_DIR})


add_library(aes STATIC IMPORTED GLOBAL)
set_target_properties(aes PROPERTIES
    IMPORTED_LOCATION ${_AES_GLUE_DIR}/${ANDROID_ABI}/lib/libaes.lib
)

include(${_AES_GLUE_DIR}/../src/CMakeLists.txt)