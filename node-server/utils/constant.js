const debug = require('../utils/constant').debug


module.exports = {
    CODE_ERROR: -1,
    CODE_SUCCESS: 0,
    CODE_TOKEN_EXPIRED: -2,
    PWD_SALT: 'admin_book',
    PRIVATE_KEY: 'admin_book_wgq',
    JWT_EXPIRED: 60 * 60,//过期时间
}