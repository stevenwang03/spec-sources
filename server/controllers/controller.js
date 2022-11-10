const data = require("../data");

module.exports = {
    hello: (req, res) => {
        res.json({"message": "Hello World!"});
    },
    sources: (req, res) => {
        res.json({"message": "Success", data: data.sources});
    },
    addSource: (req, res) => {
        data.sources.push(req.body.source);
        res.json({"message": "Success", data: data.sources});
    },
    deleteSource: (req, res) => {
        data.sources = data.sources.filter(c => c.id !== req.params.id);
        res.json({"message": "Success", data: data.sources});
    },
};