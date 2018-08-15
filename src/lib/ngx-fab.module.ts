import { NgModule } from '@angular/core';
import { NgxFabComponent } from './ngx-fab.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxFabComponent,
  ],
  exports: [
    NgxFabComponent,
  ]
})
export class NgxFabModule { }
