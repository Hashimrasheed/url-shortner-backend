import { Schema, Document, Types } from 'mongoose';

// Define the schema
export const ShortenedUrlSchema = new Schema({
  customerId: {type: Types.ObjectId, required: true},
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  clicks: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

// Define the class
export class ShortenedUrl extends Document {
  customerId: Types.ObjectId;
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
}