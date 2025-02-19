import { Body, Controller, Post } from '@nestjs/common';
import{ShortenedUrl} from './schemas/shortened-url.schema'
import { ShortenedUrlService } from './shortened-url.service';


@Controller('shortened-url')
export class ShortenedUrlController {
    constructor(private readonly shortenedUrlService: ShortenedUrlService) {}

    @Post()
    async create(@Body() createShortenedUrlDto: { originalUrl: string; customerId: string}): Promise<ShortenedUrl> {
        return this.shortenedUrlService.create(createShortenedUrlDto);
    }
}
