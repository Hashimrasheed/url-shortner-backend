import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Module1Service } from './module1.service';
import { Module1 } from './schemas/module1.schema';

@Controller('module1')
export class Module1Controller {
  constructor(private readonly module1Service: Module1Service) {}

  @Post()
  async create(@Body() createModule1Dto: { name: string; description?: string }): Promise<Module1> {
    return this.module1Service.create(createModule1Dto);
  }

  @Get()
  async findAll(): Promise<Module1[]> {
    return this.module1Service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Module1> {
    return this.module1Service.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateModule1Dto: { name?: string; description?: string }): Promise<Module1> {
    return this.module1Service.update(id, updateModule1Dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Module1> {
    return this.module1Service.delete(id);
  }
}