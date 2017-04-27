export class Property {

  id: number;
  propertyName: string;
  propertyValue: string;
  application: string;
  profile: string;

   constructor(values: Object ={}){
     Object.assign(this, values);
   }
}
