import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquarePipe } from './square.pipe';

@NgModule({
  declarations: [SquarePipe],
  imports: [CommonModule],
  exports: [SquarePipe],
})
export class SquareModule {}
