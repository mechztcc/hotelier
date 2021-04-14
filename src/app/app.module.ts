import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/main/pages/home/home.component';
import { NavbarComponent } from './components/main/template/navbar/navbar.component';
import { FooterComponent } from './components/main/template/footer/footer.component';
import { CreateAccountComponent } from './components/main/pages/create-account/create-account.component';
import { BannerComponent } from './components/main/template/banner/banner.component';
import { StepbystepComponent } from './components/main/template/stepbystep/stepbystep.component';
import { CardPlansComponent } from './components/main/template/card-plans/card-plans.component';
import { PlanSelectionComponent } from './components/main/pages/plan-selection/plan-selection.component';
import { TemplateModule } from './components/main/template/template.module';
import { PagesModule } from './components/main/pages/pages.module';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidenavComponent } from './components/dashboard/template/sidenav/sidenav.component';
import { CardEmployeesComponent } from './components/dashboard/template/card-employees/card-employees.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    SidenavComponent,
    CardEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    PagesModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
