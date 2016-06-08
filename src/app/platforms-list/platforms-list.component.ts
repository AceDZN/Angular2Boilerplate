import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'platforms-list',
  templateUrl: 'platforms-list.component.html',
  styleUrls: ['platforms-list.component.css'],
  inputs:['selectedPlatform:mySelectedPlatform'],
  outputs:['platformChanged']
})
export class PlatformsListComponent implements OnInit {
  constructor() {}

  platforms: Array<string>;
  selectedPlatform: string;
  ngOnInit():any{
    this.platforms=[
      'Angular','TypeScript','Karma'
    ];
  }
  onInputChange(t){
   this.selectedPlatform = t;
   this.onPlatformChange(this.selectedPlatform);
  }

  platformChanged = new EventEmitter<string>();

  onPlatformChange(platform:string){
    this.platformChanged.emit(platform);
  }


}
