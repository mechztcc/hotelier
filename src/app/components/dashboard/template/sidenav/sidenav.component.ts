import { Component, OnInit } from '@angular/core';

import { faUser, faBed, faMale, faCalendar, faCogs, faHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {


  faUser = faUser;
  faBed = faBed;
  faMale = faMale;
  faCalendar = faCalendar;
  faCogs = faCogs;
  faHeart = faHeart;
  
  constructor() { }

  ngOnInit(): void {
  }

}
