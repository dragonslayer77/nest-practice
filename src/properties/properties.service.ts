import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertiesService {
    properties = 
         [
        {
           name:'Yellow apartment',
           units:['kitchen','bathroom','bedroom']
        },
        {
           name:'Red apartment',
           units:['kitchen','bathroom','bedroom','bedroom','living-room']
        }
     ]
    getProperties(): any {
        return {
            properties : this.properties
        };
      }

      createProperty(property) {
        this.properties = [...this.properties, {...property}];
      }

      deleteProperty(name) {
        this.properties = this.properties.filter(p => p.name != name);
      }
}
