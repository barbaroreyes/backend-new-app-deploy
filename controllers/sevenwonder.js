const router = require('express').Router()
const SevenW = require('../models/7-wondefull')


router.get('/',async(req,res) => {
  res.json(await SevenW.find({}))
});
router.post('/',async(req,res) => {
  res.json(await SevenW.create(req.body))
});
router.put('/:id',async(req,res) => {
  res.json(await SevenW.findByIdAndUpdate(req.params.id, req.body,{ new: true }))
});
router.delete('/:id',async(req,res) => {
  res.json(await SevenW.findByIdAndRemove(req.params.id))
});

module.exports = router;