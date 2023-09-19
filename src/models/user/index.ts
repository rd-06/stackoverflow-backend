import mongoose, { Schema } from 'mongoose';

const user = new Schema({
  name: {
    type: String
  },
  uuid: String
}, { timestamps: true });

const USER = mongoose.model('User', user);

export { USER };
