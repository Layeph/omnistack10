const mongoose = require('mongoose');
const PointSchema = require('./Utils/GeoPos.js')

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
     type: PointSchema,
     indexes: ['2dsphere'],
    }
});

module.exports = mongoose.model('Dev', DevSchema);