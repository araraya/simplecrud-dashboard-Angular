import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPegawaiComponent } from './dashboard-pegawai/dashboard-pegawai.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PerusahaanComponent } from './perusahaan/perusahaan.component';
import { MobilComponent } from './mobil/mobil.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dahsboard', component: DashboardPegawaiComponent },
  { path: 'perusahaan', component: PerusahaanComponent },
  { path: 'mobil', component: MobilComponent },
  { path: 'dashboard-chart', component: ChartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
