import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'greeting',
  templateUrl: 'greeting.component.html',
  styleUrls: ['greeting.component.css']
})
export class GreetingComponent implements OnInit {

  constructor() {}

  selectedPlatform: string;
  ngOnInit():any{
  this.selectedPlatform = "_______";
    return null;
  }

}
