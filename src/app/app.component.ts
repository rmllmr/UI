import { Component } from '@angular/core';
import {ManagementDataService} from  './management-data.service';
import {Property} from  './property'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ManagementDataService]
})
export class AppComponent {

  newProperty: Property = new Property();

  constructor(private managementDataService: ManagementDataService){

  }
  addProperty(){
    this.managementDataService.addProperty(this.newProperty);
    this.newProperty = new Property();
  }


  addValueProperty(value: string, property: Property){
    this.managementDataService.addValueProperty(value, property);
  }

  removeProperty(property){
    this.managementDataService.deletePropertyById(property.id);
  }

  Propertys(): Property[]{
    return this.managementDataService.getAllPropertys();
  }

}
