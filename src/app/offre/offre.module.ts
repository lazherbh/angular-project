import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { OffreComponent } from './offre.component';


@NgModule({
  declarations: [
    OffreComponent
  ],
  imports: [
    CommonModule,
    OffreRoutingModule
  ]
})
export class OffreModule { }
