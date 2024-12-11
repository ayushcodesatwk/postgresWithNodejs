import express from 'express'
import client from './config.js';
import cors from 'cors';
import router from './src/routes/user.js'

const app = express();
const PORT = 4001;

//makes sure we'll only be accepting request from this origin
const corsOptions = {
    origin: ['http://localhost:5173'],
};

//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//router
client.query('SELECT * from students', (err, res) => {
    if(err){
        console.log(`query error ${err}`);
    }
    else{
        console.log(res.rows);
    }
});

app.use(router);

app.listen(PORT, () => console.log('server started at', PORT));
