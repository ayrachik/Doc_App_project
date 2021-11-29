/* eslint-disable @typescript-eslint/naming-convention */
export class Doctor {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public address: Address,
    public opening_hours: OpeningHour[]
  ) { }
}

export class Address {
  constructor(
    public line_1: string,
    public line_2: string,
    public district: string
  ) { }
}

export class OpeningHour {
  constructor(
    public start: string,
    public end: string,
    public isClosed: boolean,
    public day: string,
  ) { }
}
