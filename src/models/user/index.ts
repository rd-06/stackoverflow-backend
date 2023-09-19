import mongoose, { Schema } from 'mongoose';

const user = new Schema({
  email: {
    type: String
  },
  phone: {
    type: String
  },
  location: {
    type: String
  },
  name: {
    type: String
  },
  uuid: String,
  _customer: String,
  _agency: String
});

const USER = mongoose.model('User', user);

export { USER };
