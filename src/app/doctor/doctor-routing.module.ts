import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorPage } from './doctor.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DoctorPage
      },
      {
        path: ':doctorId',
        loadChildren: () => import('./doctor-details/doctor-details.module').then(m => m.DoctorDetailsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorPageRoutingModule { }
