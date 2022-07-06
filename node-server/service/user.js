const { querySql, queryOne } = require('../db')

function login(username, password) {
    return querySql(`select * from user where username='${username}' and password = '${password}'`)
}

function register(username, password) {
    return 
}

function findUser(username) {
    const sql = `select * from user where username='${username}'`
    return queryOne(sql)
}

module.exports = {
    login,
    findUser
}