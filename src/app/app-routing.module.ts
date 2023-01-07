import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './guards/home.guard';
import { AuthComponent } from './pages/auth/auth.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path:'login', component: AuthComponent },
  { 
    path:'', 
    component: MainComponent,
    canActivate:[HomeGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
