import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import {
  RouteReusableStrategy,
  ApiPrefixInterceptor,
  ErrorHandlerInterceptor,
  SharedModule
} from '@shared';
import { AuthModule } from '@app/auth';

import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuService } from './shell/menu/app.menu.service';

import { HomeModule } from './home/home.module';
import { AppBreadcrumbService } from './shell/blocks/breadcrumb/app.breadcrumb.service';
import { SsologinComponent } from './non-auth/ssologin/ssologin.component';
import { VgrRequestComponent } from './non-auth/vgr-request/vgr-request.component';
import { FeedbackComponent } from './non-auth/feedback/feedback.component';
import { AuthCallbackComponent } from './non-auth/auth-callback/auth-callback.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot(),

    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    AuthModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    AppComponent,
    SsologinComponent,
    VgrRequestComponent,
    FeedbackComponent,
    AuthCallbackComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    },
    MenuService,
    AppBreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
