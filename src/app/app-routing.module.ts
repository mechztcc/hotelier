import { CreateAccountComponent } from './components/pages/create-account/create-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateAccountComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
