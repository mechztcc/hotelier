import { CreateAccountComponent } from './components/main/pages/create-account/create-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/pages/home/home.component';
import { PlanSelectionComponent } from './components/main/pages/plan-selection/plan-selection.component';
import { MainComponent } from './components/main/main.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



const routes: Routes = [
  
    { path: '', component: MainComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'create', component: CreateAccountComponent },
      { path: 'plan', component: PlanSelectionComponent },
    ]},
   { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
