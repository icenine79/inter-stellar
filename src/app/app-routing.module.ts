import { HomeComponent } from './app-components/home/home.component';
import { ShellComponent } from './app-components/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
const admin = ()=> import('./admin/admin.module').then(x=>x.AdminModule)
const routes: Routes = [
  {path: '', component: ShellComponent,
    children:[
        {path:'home', component: HomeComponent},
        { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
