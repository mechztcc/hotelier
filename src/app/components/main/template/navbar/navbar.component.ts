import { Component, OnInit } from '@angular/core';
import { faRocket, faBars } from '@fortawesome/free-solid-svg-icons';
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
  constructor(private progress: NgProgress) { }

  ngOnInit(): void {
    this.progressRef = this.progress.ref('progressBar')
    this.fakeLoadCircle();
  }

  fakeLoadCircle() {
    this.progressRef.start();
    setInterval(() => {
      this.progressRef.complete()
    },2000)

  }

  

}
