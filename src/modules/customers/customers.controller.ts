import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './schemas/customer.schema';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}
    
      @Post()
      async create(@Body() createCustomerDto: { name: string; }): Promise<Customer> {
        return this.customersService.create(createCustomerDto);
      }
    
      @Get()
      async findAll(): Promise<Customer[]> {
        return this.customersService.findAll();
      }
    
      @Get(':id')
      async findOne(@Param('id') id: string): Promise<Customer> {
        return this.customersService.findOne(id);
      }
    
      @Put(':id')
      async update(@Param('id') id: string, @Body() updateCustomerDto: { name?: string; description?: string }): Promise<Customer> {
        return this.customersService.update(id, updateCustomerDto);
      }
    
      @Delete(':id')
      async delete(@Param('id') id: string): Promise<Customer> {
        return this.customersService.delete(id);
      }
}
