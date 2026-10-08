// repairModel.js 的責任就是：「如果 Controller 叫我新增一筆報修，我就執行 SQL。
const pool = require("../database/database");

async function createRepair(title, description, category) {
    // 使用 SQL 語法新增一筆報修資料到 repair_requests 資料表
    const sql = `
        INSERT INTO repair_requests
        (title, description, category)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;

    // 將傳入的參數放到 values 陣列中，對應 SQL 語法中的 $1, $2, $3
    const values = [title, description, category];

    const result = await pool.query(sql, values);

    // 新增完之後，把剛剛新增的那一筆資料回傳給我。
    return result.rows[0];
}

module.exports = {
    createRepair
};