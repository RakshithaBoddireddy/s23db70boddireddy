var express = require('express');
const vehicles_controllers= require('../controllers/vehicles');
var router = express.Router();

/* GET home page. */
router.get('/', vehicles_controllers.vehicles_view_all_Page );
module.exports = router;