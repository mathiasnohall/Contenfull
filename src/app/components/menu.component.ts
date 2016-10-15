import { Component, OnInit  } from '@angular/core';
import { MenuItem } from './../models/menu-item';
import { MenuService } from './../services/menu.service';

@Component({
  selector: 'menu',
  template: `
    <ul class="menu">
    <li *ngFor="let menuItem of menuItems" class="menu-item">
        {{menuItem.title}}
    </li>
  </ul>
  `
})
export class MenuComponent implements OnInit{
  menuItems: MenuItem[];

  constructor(private menuService: MenuService) { }

  getMenuItems(): void {
    this.menuService.getMenuItems().then(menuItems => this.menuItems = menuItems);
  }

  ngOnInit(): void {
    this.getMenuItems();
  }
}