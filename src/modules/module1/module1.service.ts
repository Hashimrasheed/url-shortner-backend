import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Module1 } from './schemas/module1.schema';

@Injectable()
export class Module1Service {
  constructor(
    @InjectModel(Module1.name) private readonly module1Model: Model<Module1>,
  ) {}

  async create(createModule1Dto: { name: string; description?: string }): Promise<Module1> {
    const createdModule1 = new this.module1Model(createModule1Dto);
    return createdModule1.save();
  }

  async findAll(): Promise<Module1[]> {
    return this.module1Model.find().exec();
  }

  async findOne(id: string): Promise<Module1> {
    const found = await this.module1Model.findById(id).exec();
    if (!found) {
      throw new NotFoundException(`Module1 with ID ${id} not found`);
    }
    return found;
  }

  async update(id: string, updateModule1Dto: { name?: string; description?: string }): Promise<Module1> {
    const updated = await this.module1Model.findByIdAndUpdate(id, updateModule1Dto, { new: true }).exec();
    if (!updated) {
      throw new NotFoundException(`Module1 with ID ${id} not found`);
    }
    return updated;
  }

  async delete(id: string): Promise<Module1> {
    const deleted = await this.module1Model.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(`Module1 with ID ${id} not found`);
    }
    return deleted;
  }
}