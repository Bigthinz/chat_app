const express = require('express')

const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

const router = express.Router()



router.get('/sync', userController.sync)
    //   .post('/new',userController.newMsg)


router.post('/new', userController.newMsg)


      module.exports = router


