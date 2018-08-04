const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AdUnit = new Schema({
  name: {
    type: String
  },
  reg: {
    type: Number
  },
  mark:{
  	type:Number
  },
  dob:{
  	type:Number
  },
  dep:{
  	type:String
  }
},{
    collection: 'adunits'
});

module.exports = mongoose.model('AdUnit', AdUnit);