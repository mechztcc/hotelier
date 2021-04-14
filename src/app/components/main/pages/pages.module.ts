import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSelectionComponent } from './plan-selection/plan-selection.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '../template/template.module';



@NgModule({
  declarations: [
    HomeComponent,
    CreateAccountComponent,
    PlanSelectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplateModule
  ],
  exports: [
    HomeComponent,
    CreateAccountComponent,
    PlanSelectionComponent
  ]
})
export class PagesModule { }
