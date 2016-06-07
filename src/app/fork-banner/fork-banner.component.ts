import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fork-banner',
  template: `
    <a class="fork-me" href="{{url}}" target="{{target}}">
      <img
        src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67"
        alt="Fork me on GitHub"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
        />
    </a>
  `,
  templateUrl: 'fork-banner.component.html',
  styleUrls: ['fork-banner.component.css']
})

export class ForkBannerComponent implements OnInit {

  constructor() {

  }

  url:string;
  target:string;


  ngOnInit() {
    this.url = "https://github.com/AceDZN/Angular2Boilerplate";
    this.target = "_blank"
  }

}
