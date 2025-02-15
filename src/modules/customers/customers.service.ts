import { Injectable, NotFoundException } from '@nestjs/common';
import {Customer} from './schemas/customer.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CustomersService {
    constructor(
        @InjectModel(Customer.name) private readonly customerModel: Model<Customer>,
      ) {}
    
      async create(createCustomerDto: { name: string; }): Promise<Customer> {
        const createdCustomer = new this.customerModel(createCustomerDto);
        return createdCustomer.save();
      }
    
      async findAll(): Promise<Customer[]> {
        return this.customerModel.find().exec();
      }
    
      async findOne(id: string): Promise<Customer> {
        const found = await this.customerModel.findById(id).exec();
        if (!found) {
          throw new NotFoundException(`Customer with ID ${id} not found`);
        }
        return found;
      }
    
      async update(id: string, updateCustomerDto: { name?: string; }): Promise<Customer> {
        const updated = await this.customerModel.findByIdAndUpdate(id, updateCustomerDto, { new: true }).exec();
        if (!updated) {
          throw new NotFoundException(`Customer with ID ${id} not found`);
        }
        return updated;
      }
    
      async delete(id: string): Promise<Customer> {
        const deleted = await this.customerModel.findByIdAndDelete(id).exec();
        if (!deleted) {
          throw new NotFoundException(`Customer with ID ${id} not found`);
        }
        return deleted;
      }
}
