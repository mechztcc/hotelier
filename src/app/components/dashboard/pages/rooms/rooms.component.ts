import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.less']
})
export class RoomsComponent implements OnInit {

  constructor(private titlePage: Title) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Rooms')
  }

}
