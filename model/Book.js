
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    author:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true,
    },
    avaliable:{
        type: Boolean
    },
    //image:{
      //  type: Boolean,
       // required: true
    //},
});
module.exports = mongoose.model("Book",bookSchema)
//books