const express = require('express');
const router = express.Router();
const getPosts = require('../controllers/getPosts')

router.get('/',getPosts );

module.exports=router;