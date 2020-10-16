
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material/material.module';
import { SideNavComponent } from './app-components/side-nav/side-nav.component';
import { DayPictureComponent } from './app-components/day-picture/day-picture.component';
import { BioComponent } from './app-components/bio/bio.component';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { CommentsComponent } from './app-components/comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ShellComponent,
    NavbarComponent,
    RegisterComponent,
    SummaryPipe,
    SideNavComponent,
    DayPictureComponent,
    BioComponent,
    CommentsComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NasaModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule

  ],
  entryComponents:[CommentsComponent],
  providers: [
    fakeBackendProvider,
    errorInterceptor,
    //tokenInterceptor,
    HttpClient,
    NasaService,
    UserService,
    AuthService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
