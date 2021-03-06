
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//generic user schema from previous app
const UserSchema = new Schema ({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    entries: {
        type: Array,
        required: true
    },
    register_date: {
       type: Date,
       required: true
    }
},
{collection: 'users'});

module.exports = mongoose.model('user',UserSchema);


