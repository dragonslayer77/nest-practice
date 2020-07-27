import { PropertyDto } from './types/Property';
import { PropertiesService } from './properties.service';
import { Controller, Get, Post, Body, Delete } from '@nestjs/common';

@Controller('properties')
export class PropertiesController {
    constructor(private propertiesService: PropertiesService) {}

    @Get()
    getProperties() {
        return this.propertiesService.getProperties();
    }

    @Post()
    createProperty(@Body() property: PropertyDto) {
        this.propertiesService.createProperty(property);
    }

    @Delete()
    deleteProperty(@Body() property: PropertyDto) {
      this.propertiesService.deleteProperty(property.name);
    }

}
