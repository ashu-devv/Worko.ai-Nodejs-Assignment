const express = require('express');
const router = express.Router();
const {InfoController} = require('../../controllers');
const userRoutes = require('../user-routes');

router.get('/info',InfoController.info);


module.exports = router;