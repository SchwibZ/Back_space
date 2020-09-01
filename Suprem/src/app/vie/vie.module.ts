import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VieComponent } from './vie/vie.component';
import { VieProfComponent } from './vie-prof/vie-prof.component';
import { VieAdminComponent } from './vie-admin/vie-admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: VieComponent },
  { path: 'prof', component: VieProfComponent },
  { path: 'admin', component: VieAdminComponent },
]

@NgModule({
  declarations: [VieComponent , VieProfComponent , VieAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VieModule { }
