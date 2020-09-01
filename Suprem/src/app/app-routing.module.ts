import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },


  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },

  
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },


  { path: 'agenda', loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule) },
  { path: 'classe', loadChildren: () => import('./classe/classe.module').then(m => m.ClasseModule) },
  { path: 'info', loadChildren: () => import('./info/info.module').then(m => m.InfoModule) },
  { path: 'note', loadChildren: () => import('./note/note.module').then(m => m.NoteModule) },
  { path: 'planing', loadChildren: () => import('./planing/planing.module').then(m => m.PlaningModule) },
  { path: 'vie', loadChildren: () => import('./vie/vie.module').then(m => m.VieModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
