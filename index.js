const express = require('express');
const router = express.Router();
const index = require('../models/demo');
router.get('/',async(req,res)=>{
try{
    const aliens = await index.find()
    res.json(aliens)
    
}catch(err){
    res.send('error' + err);
}

    //res.send("good girl");
})
router.get('/:id',async(req,res)=>{
    try{
        const alien = await index.findById(req.params.id)
        res.json(alien)
        
    }catch(err){
        res.send('error' + err);
    }
    
        
    })
    



router.post('/',async(req,res) => {
    const alien = new index({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{

        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('error');
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const alien = await index.findById(req.params.id)
        alien.tech = req.body.tech
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send(err);
    }
})


module.exports = router;