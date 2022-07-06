const express = require('express');
const Result = require('../models/Result');
const { body, validationResult } = require('express-validator') //参数校验
const { login, findUser } = require('../service/user')
const jwt = require('jsonwebtoken')
const { decoded, md5,  } = require('../utils')
const { PWD_SALT, PRIVATE_KEY, JWT_EXPIRED } = require('../utils/constant')
const boom = require('boom')

const router = express.Router()


router.get('/info', function (req, res, next) {
    const decode = decoded(req)
    if(decode && decode.username) {
        console.log(decode.username)
        findUser(decode.username).then(user => {
            if(user) {
                console.log(user)
                user.role = [user.role]
                new Result(user,'获取用户信息成功').success(res)
            }else {
                new Result('获取用户信息失败').fail(res)
            }
        })
    } else {
        new Result('用户信息解析失败').fail(res)
    }
})

router.post('/login', [
    body('username').isString().withMessage('用户名必须为字符串'),
    body('password').isNumeric().withMessage('用户密码必须为数字')
], function (req, res, next) {
    // new Result('登录成功').success(res)
    const err = validationResult(req)
    if (!err.isEmpty()) {
        const [{ msg }] = err.errors;
        next(boom.badRequest(msg))
    } else {
        let { username, password } = req.body;
        password = md5(`${password}${PWD_SALT}`)
        // console.log(password)
        login(username, password).then(user => {
            // console.log(user)
            if (!user || user.length === 0) {
                new Result('登录失败').fail(res)
            } else {
                const token = jwt.sign(
                    { username },
                    PRIVATE_KEY,
                    { expiresIn: JWT_EXPIRED }
                )
                new Result({ token }, '登录成功').success(res)
            }
        })
    }


})

module.exports = router