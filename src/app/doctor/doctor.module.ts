import { NgModule } from '@angular/core';

import { DoctorPageRoutingModule } from './doctor-routing.module';

import { DoctorPage } from './doctor.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DoctorPageRoutingModule
  ],
  declarations: [DoctorPage]
})
export class DoctorPageModule { }
