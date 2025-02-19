import { Injectable, NotFoundException } from '@nestjs/common';
import {ShortenedUrl} from './schemas/shortened-url.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ShortenedUrlService {
    constructor(
        @InjectModel(ShortenedUrl.name) private readonly shortenedUrlModel: Model<ShortenedUrl>,
      ) {}
    
      async create(createShortenedUrlDto: { originalUrl: string; customerId: string }): Promise<ShortenedUrl> {
        const createdShortenedUrl = new this.shortenedUrlModel(createShortenedUrlDto);
        return createdShortenedUrl.save();
      }
    
      async findAll(): Promise<ShortenedUrl[]> {
        return this.shortenedUrlModel.find().exec();
      }
    
      async findOne(id: string): Promise<ShortenedUrl> {
        const url = await this.shortenedUrlModel.findById(id).exec();
        if (!url) {
          throw new NotFoundException('Shortened URL not found');
        }
        return url;
      }
    
      async delete(id: string): Promise<ShortenedUrl> {
        const deletedUrl = await this.shortenedUrlModel.findByIdAndDelete(id).exec();
        if (!deletedUrl) {
          throw new NotFoundException('Shortened URL not found');
        }
        return deletedUrl;
      }
}
