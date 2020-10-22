import { BioComponent } from './app-components/bio/bio.component';
import { DayPictureComponent } from './app-components/day-picture/day-picture.component';
import { LoginComponent } from './app-components/login/login.component';
import { HomeComponent } from './app-components/home/home.component';
import { ShellComponent } from './app-components/shell/shell.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivateChild } from '@angular/router';
import { RegisterComponent } from './app-components/register/register.component';
import { AuthGuardService } from './shared/services/guards/auth-guard.service';
import { UserResolverService } from './shared/services/resolvers/user-resolver.service';
import { DayResolverService } from './app-components/day-resolver/day-resolver.service';
import { DayDetailComponent } from './app-components/day-detail/day-detail.component';
const admin = ()=> import('./admin/admin.module').then(x=>x.AdminModule)
const nasa = ()=> import('./nasa/nasa.module').then(x=>x.NasaModule)
const movies = ()=> import('./movies/movies.module').then(x=>x.MoviesModule)
const calculator = ()=> import('./calculator/calculator.module').then(x=>x.CalculatorModule)


const routes: Routes = [
  {path: '', component: ShellComponent,
    children:[
        {path:'home', component: HomeComponent},
        {path:'day', component: DayPictureComponent, canActivate:[AuthGuardService]},
        {path:'bio', component: BioComponent , canActivate:[AuthGuardService]},
        {path:'day-detail/:title', component: DayDetailComponent , resolve:{day:DayResolverService}},

        { path: 'nasa', loadChildren: nasa, canLoad: [AuthGuardService]},
        { path: 'admin', loadChildren: admin, canLoad: [AuthGuardService]},
        { path: 'movies', loadChildren: movies, canLoad: [AuthGuardService]},
        { path: 'calculator', loadChildren: calculator, canLoad: [AuthGuardService]},

        { path: '', redirectTo: 'home', pathMatch: 'full' },

    ]
    },
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'edit/:id', component: RegisterComponent, resolve:{user: UserResolverService}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
