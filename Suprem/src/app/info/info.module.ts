import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { InfoProfComponent } from './info-prof/info-prof.component';
import { InfoAdminComponent } from './info-admin/info-admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'prof', component: InfoProfComponent },
  { path: 'admin', component: InfoAdminComponent },
]

@NgModule({
  declarations: [InfoComponent , InfoProfComponent , InfoAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InfoModule { }
