import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularBoilerplateAppComponent } from '../app/angular-boilerplate.component';

beforeEachProviders(() => [AngularBoilerplateAppComponent]);

describe('App: AngularBoilerplate', () => {
  it('should create the app',
      inject([AngularBoilerplateAppComponent], (app: AngularBoilerplateAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-boilerplate works!\'',
      inject([AngularBoilerplateAppComponent], (app: AngularBoilerplateAppComponent) => {
    expect(app.title).toEqual('angular-boilerplate works!');
  }));
});
