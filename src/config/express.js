import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import response from '../lib/responses';
import router from './routes';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors);

app.get('/', (req, res) => {
    res.send('Welcome');
})

router(app);

export default app;