const router=require('express').Router();
const path=require('path');
const bodyParser=require('body-parser');
const encoder=bodyParser.urlencoded();
//const {isAuth}=require('../middleware')
const {getlogin,postlogin,createAcc}=require('../controller/admincontroller');

router.get('/admin',getlogin);
router.post('/admin',encoder,postlogin);
router.post('/createAcc',createAcc)

module.exports=router;