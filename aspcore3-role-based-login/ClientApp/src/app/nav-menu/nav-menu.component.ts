import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private titleService: Title, private authService: AuthService) { }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  get isLoggedIn() { return this.authService.isLoggedIn(); }

  get isAdmin() { return this.authService.isAdmin(); }

  setPageTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
