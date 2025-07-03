const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Db = require('./config/db')

const NewsRoutes = require('./routes/newsRoutes')

dotenv.config();
const PORT = 5000;



const app = express();

app.use(cors())

app.use(express.json())


app.get('/', (req,res)=>{
    res.send('Api Running...')
})

app.use('/api/news', NewsRoutes)


const Server_start = async ()=>{
    try{
        await Db();
        app.listen(PORT, ()=> console.log(`Server Running on Port ${PORT}`))

    }
    catch(e){
        console.log(`Starting Error: ${e.message}`);
        process.exit(1)
    }
}

Server_start()