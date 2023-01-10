import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HijoComponent } from './hijo/hijo.component';



@NgModule({
  declarations: [
    HomeComponent,
    HijoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    HijoComponent
  ]
})
export class PagesModule { }
