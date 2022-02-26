import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { GestionComponent } from './gestion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  declarations: [
    GestionComponent,
    PreviewComponent,
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class GestionModule { }
