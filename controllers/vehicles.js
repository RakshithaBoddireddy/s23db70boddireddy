var vehicles = require('../models/vehicles');
// List of all vehicless
exports.vehicles_list = function(req, res) {
res.send('NOT IMPLEMENTED: vehicles list');
};

exports.vehicles_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await vehicles.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle vehicles create on POST.
exports.vehicles_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: vehicles create POST');
};
// Handle vehicles delete form on DELETE.

exports.vehicles_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await vehicles.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
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

    //Screenshot 6 code
    exports.vehicles_view_one_Page = async function(req, res) {
        console.log("single view for id " + req.query.id)
        try{
        result = await vehicles.findById( req.query.id)
        res.render('vehiclesdetail', 
       { title: 'vehicles Detail', toShow: result });
        }
        catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
        }
       };



    // Handle building the view for creating a vehicle.
    // No body, no in path parameter, no query.
    // Does not need to be async
exports.vehicles_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('vehiclescreate', { title: 'vehicles_Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a costume.
// query provides the id
exports.vehicles_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await vehicles.findById(req.query.id)
        res.render('vehiclesupdate', { title: 'Vehicle Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle a delete one view with id from query
exports.vehicles_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await vehicles.findById(req.query.id)
        res.render('vehiclesdelete', {
            title: 'Vehicles Delete', toShow: result});
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
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

    exports.vehicles_update_put = async function (req, res) {
        console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`)
        try {
            let toUpdate = await vehicles.findById(req.params.id)
            // Do updates of properties
            if (req.body.name)
                toUpdate.name = req.body.name;
            if (req.body.mileage) toUpdate.mileage = req.body.mileage;
            if (req.body.price) toUpdate.price = req.body.price;
            let result = await toUpdate.save();
            console.log("Sucess " + result)
            res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
            failed`);
        }
    };
   
