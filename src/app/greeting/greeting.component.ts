import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'greeting',
  templateUrl: 'greeting.component.html',
  styleUrls: ['greeting.component.css'],
  inputs:['selectedPlatform:mySelectedPlatform']
})
export class GreetingComponent implements OnInit {

  constructor() {}


  ngOnInit():any{
    return null;
  }

}
