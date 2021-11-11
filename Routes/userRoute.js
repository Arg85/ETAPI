const UserController = require('../Controller/userController')
const router = require('express').Router()
router.get('/',()=>{
    console.log("users")
})
module.exports = router