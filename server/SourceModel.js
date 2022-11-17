const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// WRITE THE SCHEMA HERE
const sourceSchema = new Schema({
    id: { type: Number, required: true},
    name: { type: Number, required: true},
    email: { type: Number, required: true}
})

const sources = mongoose.model('spec_sources', YOUR_SCHEMA);

module.exports = sources;