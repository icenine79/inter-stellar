import { BioComponent } from './app-components/bio/bio.component';
import { DayPictureComponent } from './app-components/day-picture/day-picture.component';
import { LoginComponent } from './app-components/login/login.component';
import { HomeComponent } from './app-components/home/home.component';
import { ShellComponent } from './app-components/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';
import { RegisterComponent } from './app-components/register/register.component';
import { AuthGuardService } from './shared/services/guards/auth-guard.service';
const admin = ()=> import('./admin/admin.module').then(x=>x.AdminModule)
const nasa = ()=> import('./nasa/nasa.module').then(x=>x.NasaModule)
const routes: Routes = [
  {path: '', component: ShellComponent,
    children:[
        {path:'home', component: HomeComponent},
        {path:'day', component: DayPictureComponent, canActivate:[AuthGuardService]},
        {path:'bio', component: BioComponent , canActivate:[AuthGuardService]},

        { path: 'nasa', loadChildren: nasa, canLoad: [AuthGuardService]},
        { path: 'admin', loadChildren: admin, canLoad: [AuthGuardService]},

        { path: '', redirectTo: 'home', pathMatch: 'full' },

    ]
    },
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'register/:id', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
