import { Injectable } from '@angular/core';
import { Property } from  './property';

@Injectable()
export class ManagementDataService {

  lastId: number = 0;

  management: Property[] = [];


  constructor() {
  }


  addProperty(property: Property): ManagementDataService {
    if (!property.id){
      property.id = ++this.lastId;
    }

    this.management.push(property);
    return this;
  }

  deletePropertyById(id: number): ManagementDataService {
    this.management = this.management
      .filter(property => property.id != id);
    return this;
  }

  getAllPropertys(): Property[]{
    return this.management;
  }

  getPropertyById(id: number): Property {
    return this.management
      .filter(property => property.id === id)
      .pop();
  }

  updatePropertyById(id: number, values: Object = {}): Property {
    let property = this.getPropertyById(id);
    if (!property) {
      return null;
    }
    Object.assign(property, values);
    return property;
  }

  addValueProperty(value: string, property: Property){
    let updatedProperty = this.updatePropertyById(property.id, {
      propertyValue: value
    });
    return updatedProperty;
  }
}
