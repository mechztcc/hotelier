import { Component, OnInit } from '@angular/core';

import { faUser, faBed, faMale, faCalendar, faCogs} from '@fortawesome/free-solid-svg-icons'

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
