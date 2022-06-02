import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPegawaiComponent } from './dashboard-pegawai/dashboard-pegawai.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PerusahaanComponent } from './perusahaan/perusahaan.component';
import { MobilComponent } from './mobil/mobil.component';
import { ChartComponent } from './chart/chart.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPegawaiComponent,
    LoginComponent,
    SignupComponent,
    PerusahaanComponent,
    MobilComponent,
    ChartComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
