import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  menuItems: any[] = [];
  constructor(private readonly sidebarService: SidebarService) {
    this.menuItems = sidebarService.menu;
  }
}
