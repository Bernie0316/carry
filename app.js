const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const pool = require('./database/database');

const app = express();

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

app.use(express.static('public')); // 設定靜態檔案資料夾

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // 打開瀏覽器會出現的訊息
    res.render('home');
});


pool.query("SELECT NOW()", (err, result) => {
    if (err) {
        console.error("Database connection error:", err);
    } else {
        console.log("Database connected:", result.rows[0]);
    }
});

// 開始跑 app.js，並監聽指定的 PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});