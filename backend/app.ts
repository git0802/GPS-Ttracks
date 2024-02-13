import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import GPSrouter from './routes/locationRoute';

const app = express();

app.use(cors());

app.use(bodyParser.json());

// Endpoint to receive GPS coordinates from the frontend
app.post('/gps', GPSrouter);

export default app;
