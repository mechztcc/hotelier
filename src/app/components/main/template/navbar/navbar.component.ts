import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faRocket, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  progressRef: NgProgressRef;

  faRocket = faRocket;
  faBars = faBars;
  faTimes = faTimes;
  

  flag: boolean = false;

  constructor(private progress: NgProgress) { }

  @ViewChild('links') barsIcon: ElementRef;



  ngOnInit(): void {
    this.progressRef = this.progress.ref('progressBar')
    this.fakeLoadCircle();

  }

  ngDoCheck() {

    
  }

  fakeLoadCircle() {
    this.progressRef.start();
    setInterval(() => {
      this.progressRef.complete()
    }, 2000)
  }

  ngAfterViewInit() {


  }

  // update this method
  showNavigation() {
    
    this.flag = this.flag ? !this.flag : !this.flag
  
  }

}

