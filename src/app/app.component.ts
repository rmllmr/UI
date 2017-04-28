import { Component } from '@angular/core';
import { Http } from  '@angular/http';
import {ManagementDataService} from  './management-data.service';
import {Property} from  './property'
import "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ManagementDataService]
})
export class AppComponent {

  newProperty: Property = new Property();

  constructor(private http: Http, private managementDataService: ManagementDataService){

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

  public getQuote(app: string, profile: string) {
    this.http.get("http://localhost:8888/properties/get/"+app+"/"+profile)
      .map(result => JSON.parse(result.json()))
      .do(result => console.log("RESULT: ", JSON.stringify(result)))
      .subscribe(result => {
          this.managementDataService.management.push(result);
      }, error => {
        console.log("ERROR: ", error);
      });
  }

}
