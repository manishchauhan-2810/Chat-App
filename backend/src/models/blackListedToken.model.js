import mongoose from 'mongoose';

const blackListingSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 
  }
});

const blackListingModel = mongoose.model('BlackListing', blackListingSchema);

export default blackListingModel;
