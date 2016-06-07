import { Component } from '@angular/core';
import {ForkBannerComponent} from './fork-banner/fork-banner.component';
import {AcedznLogoComponent} from './acedzn-logo/acedzn-logo.component';
import {PlatformsListComponent} from './platforms-list/platforms-list.component';
import {GreetingComponent} from './greeting/greeting.component';

@Component({
  moduleId: module.id,
  selector: 'angular-boilerplate-app',
  templateUrl: 'angular-boilerplate.component.html',
  styleUrls: ['angular-boilerplate.component.css'],
  directives:[
    ForkBannerComponent,
    AcedznLogoComponent,
    PlatformsListComponent,
    GreetingComponent
  ]
})
export class AngularBoilerplateAppComponent {
  title = 'angular-boilerplate works!';
}
