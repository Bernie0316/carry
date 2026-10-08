// 收到表單、資料交給 model、model寫進資料庫、回傳結果給 controller、controller 再決定要回傳什麼給前端
const repairModel = require("../models/repairModel");

async function createRepair(req, res) {
    try {
        const { title, description, category } = req.body;

        const repair = await repairModel.createRepair(
            title,
            description,
            category
        );

        res.redirect("/repairs");
    } catch (error) {
        console.error("Error creating repair:", error);
        res.status(500).send("Something went wrong.");
    }
}

module.exports = {
    createRepair
};