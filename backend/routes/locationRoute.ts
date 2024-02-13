import express from 'express';
import GPS from '../models/locationModel';

const router = express.Router();

router.post('/gps', async (req, res) => {
  const { latitude, longitude } = req.body;
  const location = await GPS.create({
    latitude,
    longitude,
    time: new Date(),
    id: crypto.randomUUID(),
  });

  console.log(location);

  res.status(201).json({
    message: 'GPS data received successfully',
    location,
  });
});

export default router;
