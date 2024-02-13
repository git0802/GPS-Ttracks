import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  time: Date,
  id: String,
});

const location = mongoose.model('location', locationSchema);
export default location;
