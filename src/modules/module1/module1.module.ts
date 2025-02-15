import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Module1Controller } from './module1.controller';
import { Module1Service } from './module1.service';
import { Module1, Module1Schema } from './schemas/module1.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Module1.name, schema: Module1Schema }]),
  ],
  controllers: [Module1Controller],
  providers: [Module1Service]
})
export class Module1Module {}
