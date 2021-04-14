import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPlansComponent } from './card-plans/card-plans.component';
import { StepbystepComponent } from './stepbystep/stepbystep.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    BannerComponent,
    StepbystepComponent,
    CardPlansComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    BannerComponent,
    StepbystepComponent,
    CardPlansComponent,
    NavbarComponent,
    FooterComponent,
  ]
})
export class TemplateModule { }
