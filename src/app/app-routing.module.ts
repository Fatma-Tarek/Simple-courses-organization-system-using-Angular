import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule, isPlatformWorkerApp } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
  path: 'login',
  component: LoginComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users',
    component: UserComponent
  },

];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
