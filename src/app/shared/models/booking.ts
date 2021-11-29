import { OpeningHour } from './doctor';

export class Booking {
  constructor(
    public id: string,
    public name: string,
    public start: number,
    public doctorId: string,
    public date: string,
    public status: string,
  ) { }
}

export class BookingForm {
  constructor(
    public name: string,
    public start: string,
    public openingHour: OpeningHour
  ) { }
}
