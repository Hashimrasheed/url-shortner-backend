import { Module } from '@nestjs/common';
import { ShortenedUrlController } from './shortened-url.controller';
import { ShortenedUrlService } from './shortened-url.service';

@Module({
  controllers: [ShortenedUrlController],
  providers: [ShortenedUrlService]
})
export class ShortenedUrlModule {}
