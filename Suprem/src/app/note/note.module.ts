import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { NoteProfComponent } from './note-prof/note-prof.component';
import { NoteAdminComponent } from './note-admin/note-admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: NoteComponent },
  { path: 'prof', component: NoteProfComponent },
  { path: 'admin', component: NoteAdminComponent },
]

@NgModule({
  declarations: [NoteComponent , NoteProfComponent , NoteAdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NoteModule { }
