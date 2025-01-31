const mongoose = require('mongoose');

module.exports.dbConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database connected...')
    } catch (error) {
        console.log(error.message)
    }
}
