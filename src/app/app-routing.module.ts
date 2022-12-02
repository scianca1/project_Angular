import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PumaAboutComponent } from './puma-about/puma-about.component';
import { PumaContactosComponent } from './puma-contactos/puma-contactos.component';
import { PumaHomeComponent } from './puma-home/puma-home.component';

const routes: Routes = [
  {
   path:'',
   redirectTo:'home',
   pathMatch:'full'
  },
  {
    path:'home',
   component:PumaHomeComponent
  },
 
  {
    path:'contactos',
   component:PumaContactosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
