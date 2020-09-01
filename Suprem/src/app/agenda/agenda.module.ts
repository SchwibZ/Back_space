import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaProfComponent } from './agenda-prof/agenda-prof.component';
import { AgendaAdminComponent } from './agenda-admin/agenda-admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AgendaComponent },
  { path: 'prof', component: AgendaProfComponent },
  { path: 'admin', component: AgendaAdminComponent },
]

@NgModule({
  declarations: [AgendaComponent , AgendaProfComponent , AgendaAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AgendaModule { }
