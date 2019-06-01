const express = require('express')
const router = express.Router()

const Contact = require('../models/contact')

// get contact
router.get('/contacts',(req,res,next)=>{
    Contact.find((err,contacts)=>{
        res.json(contacts)
    })
})

// add contact
router.post('/contact',(req,res,next)=>{
    let newcontact = new Contact({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        phoneNo :req.body.phoneNo        
    });
   newcontact.save((err,contact)=>{
           if(err){
               res.json({msg:'failed to add'})
           }else{
               res.json({msg:'successfully add'})
           }
   })

})

router.delete('/contact/:id',(req,res,next)=>{
    Contact.deleteOne({_id:req.params.id},(err,result)=>{
     if(err){
         res.json(err);
     }else{
         res.json(result)
     }
    })
})
module.exports = router