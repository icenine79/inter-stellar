import { NasaModule } from './nasa/nasa.module';
import { errorInterceptor } from './helpers/error.interceptor';
import { AuthService } from './shared/services/auth.service';
import { fakeBackendProvider } from './helpers/fakebackend.provider';
import { RegisterComponent } from './app-components/register/register.component';
import { NavbarComponent } from './app-components/navbar/navbar.component';
import { ShellComponent } from './app-components/shell/shell.component';
import { LoginComponent } from './app-components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './app-components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ShellComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NasaModule,
    SharedModule
  ],
  providers: [
    fakeBackendProvider,
    errorInterceptor,
    //tokenInterceptor,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
