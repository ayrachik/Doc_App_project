import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/shared/models/doctor';
import { sortByDay } from 'src/app/shared/utils/day-sorter';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private http: HttpClient
  ) { }

  public getDoctors(): Observable<Doctor[]> {
    const url = `${environment.apiUrl}/doctor`;

    return this.http.get<Doctor[]>(url);
  }

  public getDoctorById(doctorId: string): Observable<Doctor> {
    const url = `${environment.apiUrl}/doctor/${doctorId}`;

    return this.http.get<Doctor>(url)
      .pipe(
        map(doctor => {
          const sortedDoctor = { ...doctor };
          sortedDoctor.opening_hours = sortedDoctor.opening_hours.sort(sortByDay);

          return sortedDoctor;
        })
      );
  }

}
