import { Schema, Document } from 'mongoose';

// Define the schema
export const CustomerSchema = new Schema({
  name: { type: String, required: true },
});

// Define the class
export class Customer extends Document {
  name: string;
}