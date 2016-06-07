import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'platforms-list',
  templateUrl: 'platforms-list.component.html',
  styleUrls: ['platforms-list.component.css']
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
  }


}
