const router = require('express').Router()
const SevenW = require('../models/7-wondefull')


router.get('/',async(req,res) => {
  try{
      await SevenW.remove({});
      await SevenW.create(SevenW)
      const sevenw = await SevenW.find({})
      res.json(sevenw)
  }catch(error){
  req.json({
      status:400,
      error:error
  })
  }
});