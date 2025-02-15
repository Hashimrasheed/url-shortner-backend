import { Schema, Document } from 'mongoose';

// Define the schema
export const Module1Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
});

// Define the class
export class Module1 extends Document {
  name: string;
  description?: string;
}