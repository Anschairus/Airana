import { formatDistanceToNow } from 'date-fns';
import * as mongoose from 'mongoose';

export const PhotoSchema = new mongoose.Schema({
  url: {
    type: String
  },
  photo: {
    type: String
  },
  tags: {
    type: Array<String>(),
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});