import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { CreateAccountComponent } from './components/pages/create-account/create-account.component';
import { BannerComponent } from './components/template/banner/banner.component';
import { StepbystepComponent } from './components/template/stepbystep/stepbystep.component';
import { CardPlansComponent } from './components/template/card-plans/card-plans.component';
import { PlanSelectionComponent } from './components/pages/plan-selection/plan-selection.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CreateAccountComponent,
    BannerComponent,
    StepbystepComponent,
    CardPlansComponent,
    PlanSelectionComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
