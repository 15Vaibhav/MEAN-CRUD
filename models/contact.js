var mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
firstName:{
    type:String,
    require:true
},
lastName:{
    type:String,
    require:true
},
phoneNo:{
    type:String,
    require:true
}
})
const Contact = module.exports = mongoose.model('Contact',ContactSchema)