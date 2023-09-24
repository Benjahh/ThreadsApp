import mongoose from 'mongoose';
import { boolean } from 'zod';

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String },
  bio: { type: String },
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thread',
    },
  ],
  onboarded: {
    type: Boolean,
    default: false,
  },
  communites: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
  },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
