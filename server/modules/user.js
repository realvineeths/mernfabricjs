const mongoose=require('mongoose');
const passportmon=require('passport-local-mongoose');

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})
userSchema.plugin(passportmon);

module.exports=mongoose.model('User',userSchema);