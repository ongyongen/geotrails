import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routers/userRouter';
import geocacheRoutes from './routers/geocacheRouter';

dotenv.config();

const app = express();
const port = 8000;

const allowedOrigins = ['*'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors(options));
app.use(express.json());

app.use('/user', userRoutes);
app.use('/geocache', geocacheRoutes);


// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
