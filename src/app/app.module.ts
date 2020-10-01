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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ShellComponent,
    NavbarComponent,
    RegisterComponent,
    SummaryPipe

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
    FormsModule,
  ],
  providers: [
    fakeBackendProvider,
    errorInterceptor,
    //tokenInterceptor,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
