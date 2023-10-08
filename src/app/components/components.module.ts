import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';

const COMPONENTS = [
  IncrementadorComponent,
  DonaComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
