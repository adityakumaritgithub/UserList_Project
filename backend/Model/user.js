const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    first_name : {type : String , required : [false,'must provide first name'] },
    last_name : {type :String, required : [false,'must provide last name']},
    email_id :  {type: String, required : false, unique:true},
    contact_number : {type :  Number , unique:true }
})


exports.user = mongoose.model('user', userSchema);