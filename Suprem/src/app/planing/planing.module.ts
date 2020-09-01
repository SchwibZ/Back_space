import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaningComponent } from './planing/planing.component';
import { PlaningProfComponent } from './planing-prof/planing-prof.component';
import { PlaningAdminComponent } from './planing-admin/planing-admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PlaningComponent },
  { path: 'prof', component: PlaningProfComponent },
  { path: 'admin', component: PlaningAdminComponent },
]

@NgModule({
  declarations: [PlaningComponent , PlaningProfComponent , PlaningAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlaningModule { }
