const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Db = require('./config/db');

const app = express();

dotenv.config();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const newsRoutes = require('./routes/newsRoute');
app.use('/api/news', newsRoutes);

app.get('/', (req, res) => {
    res.send('Api Running...');
});

const Server_start = async () => {
    try {
        await Db();
        app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`));
    } catch (e) {
        console.log(`Starting Error: ${e.message}`);
        process.exit(1);
    }
};

Server_start();
