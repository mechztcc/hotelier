import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.less']
})
export class ReservationComponent implements OnInit {

  constructor(private titlePage: Title) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Reservations')
  }

}
