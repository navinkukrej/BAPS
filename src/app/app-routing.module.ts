import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from './shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'about',
      loadChildren: () =>
        import('./about/about.module').then((m) => m.AboutModule)
    },

    { path: '**', redirectTo: '', pathMatch: 'full' }
  ])
  // Fallback when no prior route is matched
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
