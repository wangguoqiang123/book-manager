const expressJwt = require('express-jwt');
const { PRIVATE_KEY } = require('../utils/constant');

const jwtAuth = expressJwt({
    secret: PRIVATE_KEY,
    algorithms: ['HS256'],//需要设置算法  一般默认HS256,具体可以在  https://jwt.io  上面验证
    credentialsRequired: true // 设置为false就不进行校验了，游客也可以访问
  }).unless({
    path: [
      '/',
      '/user/login'
    ], // 设置 jwt 认证白名单
  });

module.exports = jwtAuth;