const express = require('express')
const Controller = require('../controller/controller')
const multer = require("multer")
const upload = multer()
const controller = new Controller

const router = express.Router()

router.get('/about', (req,res)=>{
    res.json({
        "name" : "yogesh",
        "profile" : "engineer"
    })
})

router.get('/', (req,res) => {
    res.send("<h1>I am yogesh </h1>");
})

router.use('/inventory', upload.single('marks-csv') , controller.inventoryController)

module.exports = router