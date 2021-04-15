import { Component, OnInit } from '@angular/core';

import { faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-plans',
  templateUrl: './card-plans.component.html',
  styleUrls: ['./card-plans.component.less']
})
export class CardPlansComponent implements OnInit {


  faRocket = faRocket;
  
  constructor() { }

  ngOnInit(): void {
  }

}
