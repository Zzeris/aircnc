const Spot = require('../models/Spot');

module.exports = {
    store(req, res) {
        console.log(req.file)
        console.log(req.body)
        res.json({ ok : true });
    }
}