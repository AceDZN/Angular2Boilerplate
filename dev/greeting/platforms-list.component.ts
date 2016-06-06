import {Component} from '@angular/core';

@Component({
  selector: 'platforms-list',
  template: `
    <ul class="list-group" [class.not-active]="platformNameField.value">
      <li>
        Angular
      </li>
      <li>
        TypeScript
      </li>
      <li>
        Karma
      </li>
    </ul>
    <div class="text-center">
      <input type="text" #platformNameField  (keyup)="onInputChange(platformNameField.value)"/>
<br /><br />
      {{selectedPlatform}}
    </div>
  `,
  styleUrls:[
    'src/css/greeting.css'
  ]
})

export class PlatformsListComponent {
  selectedPlatform = "________",
  onInputChange(t){
   this.selectedPlatform = t;
 }

}
