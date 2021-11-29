import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { Doctor } from 'src/app/shared/models/doctor';
import { BookingModalComponent } from './booking-modal/booking-modal.component';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.page.html',
  styleUrls: ['./doctor-details.page.scss'],
})
export class DoctorDetailsPage implements OnInit, OnDestroy {

  public isLoading = false;
  public doctor: Doctor;
  private doctorSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private doctorService: DoctorService,
    private modalCrtl: ModalController
  ) { }

  ngOnInit() {
    this.getDoctor();
  }

  ngOnDestroy() {
    if (this.doctorSub) {
      this.doctorSub.unsubscribe();
    }
  }

  public book(doctor: Doctor) {
    this.modalCrtl.create({
      component: BookingModalComponent,
      componentProps: { doctor }
    }).then(el => el.present());
  }

  private getDoctor(): void {
    this.isLoading = true;
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        const doctorId = paramMap.get('doctorId');
        this.doctorSub = this.doctorService.getDoctorById(doctorId).subscribe(
          doctor => this.doctor = doctor,
          _ => { },
          () => this.isLoading = false
        );
      }
    );
  }

}
