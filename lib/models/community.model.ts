import mongoose from 'mongoose';
import { boolean } from 'zod';

const communitySchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String },
  bio: { type: String },
  createdBy: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
  },
  threads: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thread',
    },
  ],
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Community =
  mongoose.models.Community || mongoose.model('Community', communitySchema);

export default Community;
