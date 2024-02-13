import mongoose from 'mongoose';
import app from './app';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// Connect to MongoDB Atlas
const MONGO_URI = process.env.DATABASE!.replace(
  '<password>',
  process.env.DATABASE_PASSWORD as string
);

export const connect = mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
