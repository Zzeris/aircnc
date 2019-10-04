const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech });

        res.json(spots);
    },
    async store(req, res) {
        const { filename } = req.file;
        const { company, price, techs } = req.body;
        const { user } = req.headers;

        const spot = await Spot.create({
            thumbnail: filename,
            user,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim())
        });

        res.json(spot);
    }
}