import { Component } from '@angular/core';
import { navItems } from './_nav';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
}
