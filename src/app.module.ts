import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertiesService } from './properties/properties.service';
import { PropertiesController } from './properties/properties.controller';

@Module({
  imports: [],
  controllers: [AppController, PropertiesController],
  providers: [AppService, PropertiesService],
})
export class AppModule {}
