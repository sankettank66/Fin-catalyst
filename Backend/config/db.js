const mongoose = require('mongoose');

const connectToMongoDB = async () => {
    let dbConnection;
    try {
        dbConnection = await mongoose.connect('mongodb://127.0.0.1:27017/FinCatalyst', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.error(error.stack);
        process.exit(1);
    }

    console.log('MongoDB connected:', dbConnection.connection.host);
};

module.exports = connectToMongoDB;
