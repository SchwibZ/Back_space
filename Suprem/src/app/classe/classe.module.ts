import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasseComponent } from './classe/classe.component';
import { ClasseProfComponent } from './classe-prof/classe-prof.component';
import { ClasseAdminComponent } from './classe-admin/classe-admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ClasseComponent },
  { path: 'prof', component: ClasseProfComponent },
  { path: 'admin', component: ClasseAdminComponent },
]

@NgModule({
  declarations: [ClasseComponent , ClasseProfComponent , ClasseAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ClasseModule { }
