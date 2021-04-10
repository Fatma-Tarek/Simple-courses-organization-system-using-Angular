import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule, isPlatformWorkerApp } from '@angular/common';
import { NoPreloading, PreloadAllModules, PreloadingStrategy, RouterModule , Routes} from '@angular/router';
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
  { path: 'courses',
    loadChildren:
    () => import('./courses/courses.module').then(m => m.CoursesModule) 
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes,{
   //  preloadingStrategy: PreloadAllModules,
     preloadingStrategy: NoPreloading
   })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
