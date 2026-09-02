const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    // 打開瀏覽器會出現的訊息
    res.send('Carry');
});

// 開始跑 app.js，並監聽指定的 PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});