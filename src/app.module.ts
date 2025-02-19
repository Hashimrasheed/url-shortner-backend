import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CustomersModule } from './modules/customers/customers.module';
import { ShortenedUrlModule } from './modules/shortened-url/shortened-url.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'),
      }),
      inject: [ConfigService],
    }),
    CustomersModule,
    ShortenedUrlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
