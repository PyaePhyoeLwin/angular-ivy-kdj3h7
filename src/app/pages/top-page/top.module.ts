import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRoutingModule } from './top-routing.module';
import { TopPageComponent } from './top-page.component';



@NgModule({
  declarations: [TopPageComponent],
  imports: [
    CommonModule
    ]
})
export class TopModule {}
