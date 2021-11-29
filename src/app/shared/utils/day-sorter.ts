/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { OpeningHour } from '../models/doctor';

export function sortByDay(oph1: OpeningHour, oph2: OpeningHour): number {
  return getindexDay(oph1.day) - getindexDay(oph2.day);
}

export function getindexDay(dayname: string): number {
  switch (dayname) {
    case 'SUN':
      return 0;
    case 'MON':
      return 1;
    case 'TUE':
      return 2;
    case 'WED':
      return 3;
    case 'THU':
      return 4;
    case 'FRI':
      return 5;
    case 'SAT':
      return 6;
  }
}
