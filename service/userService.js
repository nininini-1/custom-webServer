const {exc, escape} = require('../db/mysql');

/**
 * 根据用户名获取用户信息你
 * @param username 被获取的用户名
 * @returns {Promise<*>}
 */
async function getUser(username, password) {
    username = escape(username);
    password = escape(password);
    if(password){
        let sql = `select * from user where username = ${username} and password = ${password}`;
        console.log(sql);
        let results = await exc(sql);
        return results;
    }else{
        let sql = `select * from user where username = '${username}'`;
        let results = await exc(sql);
        return results;
    }
}
async function createUser({username, password, gender}){
    let sql = `insert into user (username, password, gender) values('${username}','${password}','${gender}');`;
    let results = await exc(sql);
    return results;
}
module.exports = {
    getUser,
    createUser
}