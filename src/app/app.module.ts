import { SharedModule } from './shared/shared.module';
import { CalculatorModule } from './calculator/calculator.module';
import { MovieService } from './movies/services/movie.service';
import { AdminModule } from './admin/admin.module';

import { SummaryPipe } from './helpers/pipes/summary-pipe';
import { HttpClientModule } from '@angular/common/http';
import { NasaService } from './nasa/services/nasa.service';
import { NasaModule } from './nasa/nasa.module';
import { errorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fakebackend.provider';
import { RegisterComponent } from './app-components/register/register.component';
import { NavbarComponent } from './app-components/navbar/navbar.component';
import { ShellComponent } from './app-components/shell/shell.component';
import { LoginComponent } from './app-components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './app-components/home/home.component';
import { HttpClient } from '@angular/common/http';
import { DayPictureComponent } from './app-components/day-picture/day-picture.component';
import { BioComponent } from './app-components/bio/bio.component';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { CommentsComponent } from './app-components/comments/comments.component';
import { MoviesModule } from './movies/movies.module';
import { DayDetailComponent } from './app-components/day-detail/day-detail.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ShellComponent,
    NavbarComponent,
    RegisterComponent,
    SummaryPipe,
    DayPictureComponent,
    BioComponent,
    CommentsComponent,
    DayDetailComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NasaModule,
SharedModule,
    AdminModule,
    MoviesModule,
    CalculatorModule

  ],
  entryComponents:[CommentsComponent],
  providers: [
    fakeBackendProvider,
    errorInterceptor,
    //tokenInterceptor,
    HttpClient,
    NasaService,
    UserService,
    AuthService,
    MovieService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
