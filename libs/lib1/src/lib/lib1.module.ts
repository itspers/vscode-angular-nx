import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibComponentComponent } from './lib-component/lib-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LibComponentComponent
  ],
  exports: [
    LibComponentComponent
  ]
})
export class Lib1Module { }
