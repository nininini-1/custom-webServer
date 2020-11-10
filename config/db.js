let MYSQL_CONFIG;
let REDIS_CONFIG;

if(process.env.NODE_ENV === 'dev'){
    MYSQL_CONFIG = {
        host     : '127.0.0.1',
        port     : '3306',
        user     : 'root',
        password : 'root',
        database : 'demo'
    }
    REDIS_CONFIG ={
        host     : '127.0.0.1',
        port     : '6379',
    }
}else if(process.env.NODE_ENV === 'pro'){
    MYSQL_CONFIG = {
        host     : '127.0.0.1',
        port     : '3306',
        user     : 'root',
        password : 'root',
        database : 'demo'
    }
    REDIS_CONFIG ={
        host     : '127.0.0.1',
        port     : '6379',
    }
}
module.exports = {
    MYSQL_CONFIG,
    REDIS_CONFIG
};