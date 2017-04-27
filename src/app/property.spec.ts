import {Property} from './property';

describe('Property', () => {
  it('should create an instance', () => {
    expect(new Property()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let property = new Property({
      propertyName: 'Name',
      propertyValue: 'Value',
      application: 'app',
      profile: 'prof'
   });
    expect(property.propertyName).toEqual('Name');
    expect(property.propertyValue).toEqual('Value');
    expect(property.application).toEqual('app');
    expect(property.profile).toEqual('prof');
  });


});
