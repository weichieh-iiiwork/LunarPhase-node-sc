// 這邊是路由檔案
const express = require('express');

const OrderList = require(__dirname + '/../models/OrderList');

const router = express.Router();

// 取得所有商品 + 篩選 ?
router.get('/', async (req, res)=>{
    res.json(await OrderList.getRows());
    
});

module.exports = router; 