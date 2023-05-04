import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-menu',
  template: `
    <ul class="layout-menu">
      <li
        app-menuitem
        *ngFor="let item of model; let i = index"
        [item]="item"
        [index]="i"
        [root]="true"
      ></li>
    </ul>
  `
})
export class AppMenuComponent implements OnInit {
  model: any[];

  constructor(public app: AppComponent) {}

  // Get this dynamically
  ngOnInit() {
    this.model = [
      {
        label: 'Favorites',
        icon: 'pi pi-fw pi-home',
        items: [
          {
            label: 'Dashboard Sales',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/examples/'],
            badge: '4',
            badgeClass: 'p-badge-info'
          },
          {
            label: 'Dashboard Analytics',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/examples/favorites/dashboardanalytics'],
            badge: '2',
            badgeClass: 'p-badge-success'
          }
        ]
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-fw pi-star',
        routerLink: ['/examples/uikit'],
        items: [
          {
            label: 'Form Layout',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/examples/uikit/formlayout']
          },
          {
            label: 'Input',
            icon: 'pi pi-fw pi-check-square',
            routerLink: ['/examples/uikit/input'],
            badge: '6',
            badgeClass: 'p-badge-danger'
          },
          {
            label: 'Float Label',
            icon: 'pi pi-fw pi-bookmark',
            routerLink: ['/examples/uikit/floatlabel']
          },
          {
            label: 'Invalid State',
            icon: 'pi pi-fw pi-exclamation-circle',
            routerLink: ['/examples/uikit/invalidstate']
          },
          {
            label: 'Button',
            icon: 'pi pi-fw pi-mobile',
            routerLink: ['/examples/uikit/button'],
            class: 'rotated-icon'
          },
          {
            label: 'Table',
            icon: 'pi pi-fw pi-table',
            routerLink: ['/examples/uikit/table'],
            badge: '6',
            badgeClass: 'p-badge-help'
          },
          {
            label: 'List',
            icon: 'pi pi-fw pi-list',
            routerLink: ['/examples/uikit/list']
          },
          {
            label: 'Tree',
            icon: 'pi pi-fw pi-share-alt',
            routerLink: ['/examples/uikit/tree']
          },
          {
            label: 'Panel',
            icon: 'pi pi-fw pi-tablet',
            routerLink: ['/examples/uikit/panel']
          },
          {
            label: 'Overlay',
            icon: 'pi pi-fw pi-clone',
            routerLink: ['/examples/uikit/overlay']
          },
          {
            label: 'Media',
            icon: 'pi pi-fw pi-image',
            routerLink: ['/examples/uikit/media']
          },
          {
            label: 'Menu',
            icon: 'pi pi-fw pi-bars',
            routerLink: ['/examples/uikit/menu'],
            preventExact: true
          },
          {
            label: 'Message',
            icon: 'pi pi-fw pi-comment',
            routerLink: ['/examples/uikit/message']
          },
          {
            label: 'File',
            icon: 'pi pi-fw pi-file',
            routerLink: ['/examples/uikit/file']
          },
          {
            label: 'Chart',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ['/examples/uikit/charts']
          },
          {
            label: 'Misc',
            icon: 'pi pi-fw pi-circle-off',
            routerLink: ['/examples/uikit/misc']
          }
        ]
      },
      {
        label: 'Prime Blocks',
        icon: 'pi pi-fw pi-prime',
        routerLink: ['/examples/blocks'],
        items: [
          {
            label: 'Free Blocks',
            icon: 'pi pi-fw pi-eye',
            routerLink: ['/examples/blocks']
          },
          {
            label: 'All Blocks',
            icon: 'pi pi-fw pi-globe',
            url: ['https://www.primefaces.org/primeblocks-ng'],
            target: '_blank'
          }
        ]
      },
      {
        label: 'Utilities',
        icon: 'pi pi-fw pi-compass',
        routerLink: ['/examples/utilities'],
        items: [
          {
            label: 'PrimeIcons',
            icon: 'pi pi-fw pi-prime',
            routerLink: ['utilities/icons']
          },
          {
            label: 'PrimeFlex',
            icon: 'pi pi-fw pi-desktop',
            url: ['https://www.primefaces.org/primeflex/'],
            target: '_blank'
          }
        ]
      },
      {
        label: 'Pages',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/examples/pages'],
        items: [
          {
            label: 'Crud',
            icon: 'pi pi-fw pi-pencil',
            routerLink: ['/examples/pages/crud']
          },
          {
            label: 'Calendar',
            icon: 'pi pi-fw pi-calendar-plus',
            routerLink: ['/examples/pages/calendar']
          },
          {
            label: 'Timeline',
            icon: 'pi pi-fw pi-calendar',
            routerLink: ['/examples/pages/timeline']
          },
          {
            label: 'Wizard',
            icon: 'pi pi-fw pi-star',
            routerLink: ['/examples/wizard']
          },
          {
            label: 'Landing',
            icon: 'pi pi-fw pi-globe',
            badge: '2',
            badgeClass: 'p-badge-warning',
            items: [
              {
                label: 'Static',
                icon: 'pi pi-fw pi-globe',
                url: 'assets/pages/landing.html',
                target: '_blank'
              },
              {
                label: 'Component',
                icon: 'pi pi-fw pi-globe',
                routerLink: ['/examples/pages/landing']
              }
            ]
          },
          {
            label: 'Login',
            icon: 'pi pi-fw pi-sign-in',
            routerLink: ['/examples/login']
          },
          {
            label: 'Invoice',
            icon: 'pi pi-fw pi-dollar',
            routerLink: ['/examples/pages/invoice']
          },
          {
            label: 'Help',
            icon: 'pi pi-fw pi-question-circle',
            routerLink: ['/examples/pages/help']
          },
          {
            label: 'Error',
            icon: 'pi pi-fw pi-times-circle',
            routerLink: ['/examples/error']
          },
          {
            label: 'Not Found',
            icon: 'pi pi-fw pi-exclamation-circle',
            routerLink: ['/examples/notfound']
          },
          {
            label: 'Access Denied',
            icon: 'pi pi-fw pi-lock',
            routerLink: ['/examples/access']
          },
          {
            label: 'Contact Us',
            icon: 'pi pi-fw pi-pencil',
            routerLink: ['/examples/contactus']
          },
          {
            label: 'Empty',
            icon: 'pi pi-fw pi-circle-off',
            routerLink: ['/examples/pages/empty']
          }
        ]
      },
      {
        label: 'Hierarchy',
        icon: 'pi pi-fw pi-align-left',
        items: [
          {
            label: 'Submenu 1',
            icon: 'pi pi-fw pi-align-left',
            items: [
              {
                label: 'Submenu 1.1',
                icon: 'pi pi-fw pi-align-left',
                items: [
                  { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left' },
                  { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left' },
                  { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left' }
                ]
              },
              {
                label: 'Submenu 1.2',
                icon: 'pi pi-fw pi-align-left',
                items: [
                  { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left' }
                ]
              }
            ]
          },
          {
            label: 'Submenu 2',
            icon: 'pi pi-fw pi-align-left',
            items: [
              {
                label: 'Submenu 2.1',
                icon: 'pi pi-fw pi-align-left',
                items: [
                  { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left' },
                  { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left' }
                ]
              },
              {
                label: 'Submenu 2.2',
                icon: 'pi pi-fw pi-align-left',
                items: [
                  { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left' }
                ]
              }
            ]
          }
        ]
      },
      {
        label: 'Start',
        icon: 'pi pi-fw pi-download',
        items: [
          {
            label: 'Buy Now',
            icon: 'pi pi-fw pi-shopping-cart',
            url: ['https://www.primefaces.org/store']
          },
          {
            label: 'Documentation',
            icon: 'pi pi-fw pi-info-circle',
            routerLink: ['/examples/documentation']
          }
        ]
      }
    ];
  }
}
