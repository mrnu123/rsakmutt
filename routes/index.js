const express = require('express')
const router = express.Router()
 
// เมื่้อเข้ามาที่หน้าแรก path: "/". 
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' })
})
 
module.exports = router