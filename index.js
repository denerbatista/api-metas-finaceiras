import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { routerMetas } from './src/routers/metas.router.js';
import connectToDatabase from './src/database/database.js';

connectToDatabase();

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/metas', routerMetas);


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
