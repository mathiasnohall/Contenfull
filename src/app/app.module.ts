import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuComponent }   from './components/menu.component';

import { MenuService } from './services/menu.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    MenuComponent 
  ],
  bootstrap:    [ MenuComponent ],
  providers: [MenuService]
})

export class AppModule { }