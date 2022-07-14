

set(_AES_GLUE_SRC_DIR ${CMAKE_CURRENT_LIST_DIR})

add_library(aes_glue ${_AES_GLUE_SRC_DIR}/aes_glue.cpp)

target_link_libraries(aes_glue
    aes
    ${ENGINE_NAME} # cocos_engine
)

target_link_directories(aes_glue PRIVATE
    ${_AES_GLUE_SRC_DIR}/../include
)