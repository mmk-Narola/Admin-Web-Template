import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Event as NavigationEvent,
} from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CoreU Admin-Web-Template';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });

    // this.router.events.subscribe((event: NavigationEvent) => {
    //   if (event instanceof NavigationEnd) {
    //     console.log(event);
    //   }
    // });
  }
}
