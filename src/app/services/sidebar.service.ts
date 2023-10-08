import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  menu: any = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenus: [
        { title: 'Main', url: '' },
        { title: 'ProgressBar', url: 'progress' },
        { title: 'Gráficas', url: 'graficas' },
        { title: 'Promesas', url: 'promesas' },
        { title: 'Rxjs', url: 'rxjs' },
      ],
    },
  ];
  constructor() {}
}
