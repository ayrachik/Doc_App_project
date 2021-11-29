import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { OpeningHour } from '../models/doctor';

export const bookingValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const openingHour: OpeningHour = control.get('openingHour')?.value;
  const start: number = +control.get('start')?.value;
  if (!openingHour || !start) {
    return null;
  }

  return start >= +openingHour?.start && start <= +openingHour?.end
    ? null
    : { outsideOpeningHour: true };
};
