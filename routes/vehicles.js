var express = require('express');
const vehicles_controllers= require('../controllers/vehicles');
var router = express.Router();

/* GET home page. */
router.get('/', vehicles_controllers.vehicles_view_all_Page );
/* GET detail vehicles page */
router.get('/detail', vehicles_controllers.vehicles_view_one_Page);
/* GET create vehicle page */
router.get('/create', vehicles_controllers.vehicles_create_Page);
/* GET create update page */
router.get('/update', vehicles_controllers.vehicle_update_Page);
/* GET delete costume page */
router.get('/delete', vehicles_controllers.vehicles_delete_Page);
module.exports = router;