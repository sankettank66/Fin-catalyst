const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); // Import the connectDB function

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB(); // Call the connectDB function to establish MongoDB connection

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/assets', require('./routes/assetsRoutes'));

app.use('*', (req, res) => {
    res.status(404).send({ success: 'false', message: 'Page Not Found' });
});

app.listen(port, () => {
    console.log(`Server is running on port: http://127.0.0.1:${port}`);
});
