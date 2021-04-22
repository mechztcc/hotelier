import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {

  constructor(private titlePage: Title) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Employees')
  }

}
