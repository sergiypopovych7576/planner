import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public menuItems = [
    {
      caption: 'Budget',
      icon: 'payments',
      path: 'budget'
    },
    {
      caption: 'Calendar',
      icon: 'calendar_month',
      path: 'calendar'
    }
  ]

  constructor(private readonly _router: Router) { }

  ngOnInit(): void {
  }

  public isActive(path: string): boolean {
    return this._router.url.includes(path);
  }
}
