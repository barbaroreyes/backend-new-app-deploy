const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const sevenWSchema = new Schema({
    name: String,
    url: String,
    description: String,

},{timestamps:true}
)

                           //collections- by default will make a lowercase
const SevenW = mongoose.model( 'SevenW ', sevenWSchema )
//export the schema 
module.exports= SevenW