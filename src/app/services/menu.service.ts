import { Injectable } from '@angular/core';
import { MenuItem } from './../models/menu-item';

const MOCKMENU: MenuItem[] = [
    { title: 'about contentfull', url: '/about-contentfull/'  },
    { title: 'about angular 2', url: '/about-angular-2/'  },
    { title: 'this is awesome', url: '/this-is-awesome/'  },
];

@Injectable()
export class MenuService {
    getMenuItems(): Promise<MenuItem[]> {
    return Promise.resolve(MOCKMENU);
  }
}
