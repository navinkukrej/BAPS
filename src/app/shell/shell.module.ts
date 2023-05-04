import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { I18nModule } from '@app/i18n';
import { AuthModule } from '@app/auth';
import { ShellComponent } from './shell.component';
import { AppConfigComponent } from './config/app.config.component';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppInlineMenuComponent } from './menu/app.inlinemenu.component';
import { AppMenuComponent } from './menu/app.menu.component';
import { AppMenuitemComponent } from './menu/app.menuitem.component';
import { AppRightMenuComponent } from './menu/app.rightmenu.component';
import { AppTopBarComponent } from './topbar/app.topbar.component';
import { AppBreadcrumbComponent } from './blocks/breadcrumb/app.breadcrumb.component';
import { AppCodeModule } from './blocks/app-code/app.code.component';
import { SharedModule } from '@app/@shared';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    AuthModule,
    I18nModule,
    RouterModule,
    AppCodeModule,
    SharedModule
  ],
  declarations: [
    ShellComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppInlineMenuComponent,
    AppMenuComponent,
    AppRightMenuComponent,
    AppConfigComponent,
    AppMenuitemComponent,
    AppBreadcrumbComponent
  ]
})
export class ShellModule {}
