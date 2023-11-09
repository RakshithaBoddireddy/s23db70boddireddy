var vehicles = require('../models/vehicles');
// List of all vehicless
exports.vehicles_list = function(req, res) {
res.send('NOT IMPLEMENTED: vehicles list');
};
// for a specific vehicles.
exports.vehicles_detail = function(req, res) {
res.send('NOT IMPLEMENTED: vehicles detail: ' + req.params.id);
};
// Handle vehicles create on POST.
exports.vehicles_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: vehicles create POST');
};
// Handle vehicles delete form on DELETE.
exports.vehicles_delete = function(req, res) {
res.send('NOT IMPLEMENTED: vehicles delete DELETE ' + req.params.id);
};
// Handle vehicles update form on PUT.
exports.vehicles_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: vehicles update PUT' + req.params.id);
};

// List of all vehicles
exports.vehicles_list = async function(req, res) {
    try{
    thevehicles = await vehicles.find();
    res.send(thevehicles);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
    // Handle a show all view
    exports.vehicles_view_all_Page = async function(req, res) {
    try{
    thevehicles = await vehicles.find();
    res.render('vehicles', { title: 'vehicles Search Results', results: thevehicles });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle vehicles create on POST.
exports.vehicles_create_post = async function(req, res) {
    console.log(req.body)
    let document = new vehicles();
    document.name = req.body.name;
    document.mileage = req.body.mileage;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    



