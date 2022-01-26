import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { createConnection } from 'typeorm';

import userRoute from './routes/user.routes';
import authRoutes from './routes/auth.routes';

const app = express();
createConnection();

//MIDLEWARE
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// LOGIN ROUTE
app.use(authRoutes);

// ROUTES
app.use(userRoute);


app.listen(3000);
console.log("SERVER LISTEN PORT ",3000);