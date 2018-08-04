const express = require('express');
const app = express();
const adUnitRoutes = express.Router();
let AdUnit = require('../models/AdUnit');
adUnitRoutes.route('/add').post(function (req, res) {
  let adUnit = new AdUnit(req.body);
  adUnit.save()
    .then(game => {
    res.status(200).json({'adUnit': 'Student Details added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

adUnitRoutes.route('/').get(function (req, res) {
    AdUnit.find(function (err, adUnits){
    if(err){
      console.log(err);
    }
    else {
      res.json(adUnits);
    }
  });
});

adUnitRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AdUnit.findById(id, function (err, adUnit){
      res.json(adUnit);
  });
});

adUnitRoutes.route('/update/:id').post(function (req, res) {
    AdUnit.findById(req.params.id, function(err, adUnit) {
    if (!adUnit)
      return next(new Error('Could not load Document'));
    else {
        adUnit.name = req.body.name;
        adUnit.reg = req.body.reg;

        adUnit.save().then(adUnit => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

adUnitRoutes.route('/delete/:id').get(function (req, res) {
    AdUnit.findByIdAndRemove({_id: req.params.id}, function(err, adUnit){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = adUnitRoutes;