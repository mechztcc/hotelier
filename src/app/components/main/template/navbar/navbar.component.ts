import { Component, OnInit } from '@angular/core';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  progressRef: NgProgressRef;

  faRocket = faRocket;
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
