import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from '../pages/register-form/register-form.component';
import { AdmindDashboardComponent } from '../pages/admind-dashboard/admind-dashboard.component';
import { PreparerDashboardComponent } from '../pages/preparer-dashboard/preparer-dashboard.component';
import { StudentGradesComponent } from '../pages/student-grades/student-grades.component';
import { HamburguerMenuComponent } from '../layouts/hamburguer-menu/hamburguer-menu.component';
import { HeaderComponent } from '../layouts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    AdmindDashboardComponent,
    PreparerDashboardComponent,
    StudentGradesComponent,
    HamburguerMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
