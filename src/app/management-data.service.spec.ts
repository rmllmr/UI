import { TestBed, inject } from '@angular/core/testing';
import {Property} from './property';
import { ManagementDataService } from './management-data.service';

describe('ManagementDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagementDataService]
    });
  });

  it('should ...', inject([ManagementDataService], (service: ManagementDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllProperty()', () => {

    it('should return an empty array by default', inject([ManagementDataService], (service: ManagementDataService) => {
      expect(service.getAllPropertys()).toEqual([]);
    }));

    it('should return all Propertys', inject([ManagementDataService], (service: ManagementDataService) => {
      let property1 = new Property({
        propertyName: 'Name1',
        propertyValue: 'Value1',
        application: 'app1',
        profile: 'prof1'
      });
      let property2 = new Property({
        propertyName: 'Name2',
        propertyValue: 'Value2',
        application: 'app2',
        profile: 'prof2'
      });
      service.addProperty(property1);
      service.addProperty(property2);
      expect(service.getAllPropertys()).toEqual([property1, property2]);
    }));

  });


  describe('#save(Property)', () => {

    it('should automatically assign an incrementing id', inject([ManagementDataService], (service: ManagementDataService) => {
      let property1 = new Property({
        propertyName: 'Name1',
        propertyValue: 'Value1',
        application: 'app1',
        profile: 'prof1'
      });
      let property2 = new Property({
        propertyName: 'Name2',
        propertyValue: 'Value2',
        application: 'app2',
        profile: 'prof2'
      });
      service.addProperty(property1);
      service.addProperty(property2);
      expect(service.getPropertyById(1)).toEqual(property1);
      expect(service.getPropertyById(2)).toEqual(property2);
    }));

  });

  describe('#deletePropertyById(id)', () => {

    it('should remove todo with the corresponding id', inject([ManagementDataService], (service: ManagementDataService) => {
      let property1 = new Property({
        propertyName: 'Name1',
        propertyValue: 'Value1',
        application: 'app1',
        profile: 'prof1'
      });
      let property2 = new Property({
        propertyName: 'Name2',
        propertyValue: 'Value2',
        application: 'app2',
        profile: 'prof2'
      });
      service.addProperty(property1);
      service.addProperty(property2);
      expect(service.getAllPropertys()).toEqual([property1, property2]);
      service.deletePropertyById(1);
      expect(service.getAllPropertys()).toEqual([property2]);
      service.deletePropertyById(2);
      expect(service.getAllPropertys()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([ManagementDataService], (service: ManagementDataService) => {
      let property1 = new Property({
        propertyName: 'Name1',
        propertyValue: 'Value1',
        application: 'app1',
        profile: 'prof1'
      });
      let property2 = new Property({
        propertyName: 'Name2',
        propertyValue: 'Value2',
        application: 'app2',
        profile: 'prof2'
      });
      service.addProperty(property1);
      service.addProperty(property2);
      expect(service.getAllPropertys()).toEqual([property1, property2]);
      service.deletePropertyById(3);
      expect(service.getAllPropertys()).toEqual([property1, property2]);

    }));

  });


});
