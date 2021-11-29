/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/semi */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking, BookingForm } from 'src/app/shared/models/booking';
import { Doctor } from 'src/app/shared/models/doctor';
import { getindexDay } from 'src/app/shared/utils/day-sorter';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private hhtp: HttpClient
  ) { }

  public book(bookingForm: BookingForm, doctor: Doctor): Observable<Booking> {
    const url = `${environment.apiUrl}/booking`;
    const booking = this.formToBooking(bookingForm, doctor);

    return this.hhtp.post<Booking>(url, booking);
  }

  private formToBooking(bookingForm: BookingForm, doctor: Doctor): Booking {
    const bookingDayIndex = getindexDay(bookingForm.openingHour.day);
    const todayIndex = new Date().getDay();
    const bookingDate = new Date();
    if (bookingDayIndex === todayIndex) {
      if (+bookingForm.start < new Date().getHours()) {
        bookingDate.setDate(bookingDate.getDate() + 7);
      }
    } else {
      const dayDiff = bookingDayIndex - todayIndex < 0 ? 7 - (bookingDayIndex - todayIndex) : bookingDayIndex - todayIndex;
      bookingDate.setDate(bookingDate.getDate() + dayDiff);
    }

    return new Booking(null, bookingForm.name, +bookingForm.start, doctor.id, bookingDate.toISOString().split('T')[0], null);
  }
}
