const data = require("../data");
const sources= require('../models/SourceModel');

module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    sources: (req, res) => {
        sources.find({})
        .then(sourceData => {
            console.log(sourceData);
            res.json({"message": "OK", data: sourceData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
    addSource: (req, res) => {
        sources.create(req.body)
        .then(sourceData => {
            console.log(sourceData);
            res.json({"message": "OK", data: sourceData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
    deleteSource: (req, res) => {
        sources.findOneAndDelete({id:req.params.id})
        .then(sourceData => {
            console.log(sourceData);
            res.json({"message": "OK", data: sourceData});
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
};