import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialsService } from './credentials.service';
import { AuthCallBack } from './auth.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(
    private routerService: Router,
    private activeRoute: ActivatedRoute,
    private credentialServiceProvider: CredentialsService
  ) {
    const data = JSON.parse(
      this.activeRoute.snapshot.queryParamMap.get('auth')
    ) as AuthCallBack;
    if (data.token) {
      this.credentialServiceProvider.setCredentials({
        username: 'test',
        token: data.token
      });
    }
    debugger;
    this.routerService.navigate(['/dashboard']);
  }
}
