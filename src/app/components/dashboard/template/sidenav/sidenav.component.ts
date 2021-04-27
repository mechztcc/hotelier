import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { faUser, faBed, faMale, faCalendar, faCogs, faHeart, faArrowsAltH } from '@fortawesome/free-solid-svg-icons'

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
  faArrowsAltH = faArrowsAltH;
  

  flag: boolean = true;

  constructor() { }

  @ViewChild('links') barsIcon: ElementRef;


  ngOnInit(): void {
    
  }
  
  ngAfterViewInit() {
    // console.log(this.barsIcon);


  }

  showSideNav() {
    this.flag = this.flag ? !this.flag : !this.flag
    // console.log(this.flag);
    
  }

}
