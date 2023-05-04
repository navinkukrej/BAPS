import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { I18nModule } from '@app/i18n';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login.component';
import { AuthComponent } from './auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TourComponent } from './tour/tour.component';
import { PreScheduleComponent } from './pre-schedule/pre-schedule.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    I18nModule,
    AuthRoutingModule
  ],
  exports: [I18nModule],
  declarations: [
    LoginComponent,
    AuthComponent,
    DashboardComponent,
    UserComponent,
    TourComponent,
    PreScheduleComponent,
    ReportsComponent,
    SettingsComponent
  ]
})
export class AuthModule {}
