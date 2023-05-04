import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ShellComponent } from '../shell.component';

@Component({
  selector: 'app-rightmenu',
  templateUrl: './app.rightmenu.component.html'
})
export class AppRightMenuComponent {
  constructor(public appMain: ShellComponent, public app: AppComponent) {}
}
