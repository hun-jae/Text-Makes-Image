// https://m.blog.naver.com/sejun3278/221569678512

const mysql = require('mysql');

const db = mysql.createPool({
    host: 'tmirds-1.ct5eslf4luye.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'root',
    password: '',
    database: 'users'
});

module.exports = db;