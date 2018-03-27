const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/esGApe')

mongoose.Promise = Promise

module.exports = mongoose
