import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSelectionComponent } from './plan-selection/plan-selection.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TemplateModule } from '../template/template.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    HomeComponent,
    CreateAccountComponent,
    PlanSelectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplateModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    HomeComponent,
    CreateAccountComponent,
    PlanSelectionComponent
  ]
})
export class PagesModule { }
