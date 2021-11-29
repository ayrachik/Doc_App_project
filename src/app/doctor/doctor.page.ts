import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorService } from '../core/services/doctor.service';
import { Doctor } from '../shared/models/doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {

  public isLoading = false;
  public doctors: Doctor[];

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDoctors();
  }

  public seeDetails(doctor: Doctor): void {
    this.router.navigate([`doctor/${doctor.id}`]);
  }

  private getDoctors(): void {
    this.isLoading = true;
    this.doctorService.getDoctors().subscribe(
      doctors => {
        this.doctors = doctors;
      },
      _ => { },
      () => this.isLoading = false
    );
  }

}
