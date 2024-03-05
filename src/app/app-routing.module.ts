import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'auth', component: AuthComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
