import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  flag: boolean = false;

  constructor(private progress: NgProgress) { }

  @ViewChild('links') barsIcon: ElementRef;



  ngOnInit(): void {
    this.progressRef = this.progress.ref('progressBar')
    this.fakeLoadCircle();

  }

  fakeLoadCircle() {
    this.progressRef.start();
    setInterval(() => {
      this.progressRef.complete()
    }, 2000)
  }

  ngAfterViewInit() {
    console.log(this.barsIcon);

  }

  showNavigation() {

    if (!this.flag) {
      this.barsIcon.nativeElement.style.flexDirection = 'column'
      this.barsIcon.nativeElement.children[0].className = 'show'
      this.barsIcon.nativeElement.children[1].className = 'show'
      this.barsIcon.nativeElement.children[2].className = 'show'
      this.barsIcon.nativeElement.children[3].className = 'show'
      this.flag = !this.flag
    }
    else 
    if (this.flag = true) {
      this.barsIcon.nativeElement.style.flexDirection = ''
      this.barsIcon.nativeElement.children[0].className = ''
      this.barsIcon.nativeElement.children[1].className = ''
      this.barsIcon.nativeElement.children[2].className = ''
      this.barsIcon.nativeElement.children[3].className = ''
      this.flag = !this.flag
      
    }






  }

}
