import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeesComponent } from './components/dashboard/pages/employees/employees.component';
import { ReservationComponent } from './components/dashboard/pages/reservation/reservation.component';
import { RoomsComponent } from './components/dashboard/pages/rooms/rooms.component';
import { CardEmployeeComponent } from './components/dashboard/template/card-employee/card-employee.component';
import { CardEmployeesComponent } from './components/dashboard/template/card-employees/card-employees.component';
import { CardReservationComponent } from './components/dashboard/template/card-reservation/card-reservation.component';
import { CardRoomComponent } from './components/dashboard/template/card-room/card-room.component';
import { HeaderCardComponent } from './components/dashboard/template/header-card/header-card.component';
import { SearchBarComponent } from './components/dashboard/template/search-bar/search-bar.component';
import { SidenavComponent } from './components/dashboard/template/sidenav/sidenav.component';
import { MainComponent } from './components/main/main.component';
import { PagesModule } from './components/main/pages/pages.module';
import { TemplateModule } from './components/main/template/template.module';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    SidenavComponent,
    CardEmployeesComponent,
    SearchBarComponent,
    HeaderCardComponent,
    CardEmployeeComponent,
    EmployeesComponent,
    ReservationComponent,
    CardReservationComponent,
    RoomsComponent,
    CardRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    PagesModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
