import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
        {
          label: 'Books',
          icon: 'pi pi-fw pi-book',
          items: [
            {
              label: 'Books',
              icon: 'pi pi-fw pi-book',
              routerLink: ['/books/list']
            },
            {
              label: 'New Book',
              icon: 'pi pi-fw pi-plus',
              routerLink: ['/books/add-book']
            }
          ]
        },
        {
          label: 'Author',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'Authors',
              icon: 'pi pi-fw pi-users',
              routerLink: ['/authors']
            },
            {
                label: 'New Author',
                icon: 'pi pi-fw pi-user-plus',
                routerLink: ['/authors/add-author']
            }
          ]
        }
      ];
  }
}
