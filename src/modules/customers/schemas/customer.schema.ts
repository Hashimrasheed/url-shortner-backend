import { Schema, Document } from 'mongoose';

// Define the schema
export const CustomerSchema = new Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
});

// Define the class
export class Customer extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}