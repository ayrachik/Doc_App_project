import { NgModule } from '@angular/core';

import { DoctorDetailsPageRoutingModule } from './doctor-details-routing.module';

import { DoctorDetailsPage } from './doctor-details.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookingModalComponent } from './booking-modal/booking-modal.component';

@NgModule({
  imports: [
    SharedModule,
    DoctorDetailsPageRoutingModule
  ],
  declarations: [DoctorDetailsPage, BookingModalComponent]
})
export class DoctorDetailsPageModule { }
