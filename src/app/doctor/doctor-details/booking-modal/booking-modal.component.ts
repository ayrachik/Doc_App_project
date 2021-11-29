import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BookingService } from 'src/app/core/services/booking.service';
import { Doctor } from 'src/app/shared/models/doctor';
import { bookingValidator } from 'src/app/shared/validators/booking-validator';

@Component({
  selector: 'app-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss'],
})
export class BookingModalComponent implements OnInit, OnDestroy {

  @Input() doctor: Doctor;
  public bookingForm: FormGroup;
  private bookingSub: Subscription;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private modalCrtl: ModalController,
    private toastCrtl: ToastController,
    private router: Router,
    private loadingCrtl: LoadingController
  ) { }

  get name(): FormControl { return this.bookingForm.get('name') as FormControl; }
  get openingHour(): FormControl { return this.bookingForm.get('openingHour') as FormControl; }
  get start(): FormControl { return this.bookingForm.get('start') as FormControl; }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {
    if (this.bookingSub) {
      this.bookingSub.unsubscribe();
    }
  }

  public close(): void {
    this.modalCrtl.dismiss().then();
  }

  public book(): void {
    if (this.bookingForm.invalid) {
      return;
    }
    this.loadingCrtl.create({
      message: 'Creating booking...'
    }).then(loadingElt => {
      loadingElt.present();

      this.bookingSub = this.bookingService.book(this.bookingForm.value, this.doctor)
        .subscribe(booking => {
          this.modalCrtl.dismiss(booking).then();
          this.router.navigate(['doctor']);
          this.toastCrtl.create({
            message: 'Your booking has been created successfully.',
            duration: 10000,
            buttons: [
              {
                side: 'end',
                text: 'OK',
                role: 'cancel'
              }
            ]
          }).then(el => el.present());
        },
          _ => {
            this.toastCrtl.create({
              message: 'An error occured when creating your booking, please book another day.',
              duration: 10000,
              buttons: [
                {
                  side: 'end',
                  text: 'OK',
                  role: 'cancel'
                }
              ]
            }).then(el => el.present());
            loadingElt.dismiss();
          },
          () => {
            loadingElt.dismiss();
          }
        );
    });

  }

  public onOpneingHourInput() {
    if (this.bookingForm.hasError('outsideOpeningHour')) {
      this.start.setErrors([{ outsideOpeningHour: true }]);
      this.openingHour.setErrors([{ outsideOpeningHour: true }]);
    }
    else {
      this.start.setErrors(null);
      this.openingHour.setErrors(null);
    }
  }

  private initForm(): void {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required]],
      openingHour: [null, [Validators.required]],
      start: [null, [Validators.required]]
    },
      { validators: bookingValidator }
    );
  }

}
