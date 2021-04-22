import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor( private titlePage: Title) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Welcome to the home Page')
  }

}
