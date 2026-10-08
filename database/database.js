const { Pool } = require("pg");
// pg 是 Node.js 跟 PostgreSQL溝通的套件
require("dotenv").config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;