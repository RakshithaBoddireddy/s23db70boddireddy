var express = require('express');
var vehicles_controller= require('../controllers/vehicles');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET home page. */
router.get('/', vehicles_controller.vehicles_view_all_Page );
/* GET detail vehicles page */
router.get('/detail', secured, vehicles_controller.vehicles_view_one_Page);
/* GET create vehicle page */
router.get('/create', secured, vehicles_controller.vehicles_create_Page);
/* GET create update page */
router.get('/update', secured, vehicles_controller.vehicles_update_Page);
/* GET delete costume page */
router.get('/delete', secured, vehicles_controller.vehicles_delete_Page);
module.exports = router;