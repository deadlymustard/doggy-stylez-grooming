import {Component, ElementRef, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

import * as _ from 'lodash';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activePage: string;
  activePageClass: string;

  constructor(private router: Router ) {
    router.events.subscribe((url: any) => {
      if (url instanceof NavigationEnd) {
        this.setActivePage(url.url);
        console.log(this.activePage);
      }
    });
  }

  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  ngOnInit() {

  }

  setActivePage(route: string): void {
    this.activePage = _.startCase(route.substring(1));
    this.activePageClass = route.substring(1);
  }

}
