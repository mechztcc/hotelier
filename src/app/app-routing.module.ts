import { CreateAccountComponent } from './components/pages/create-account/create-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PlanSelectionComponent } from './components/pages/plan-selection/plan-selection.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateAccountComponent },
  { path: 'plan', component: PlanSelectionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
