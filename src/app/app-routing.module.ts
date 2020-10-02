import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { DisplayNoteComponent } from './display-note/display-note.component';
import { OfflineNotesComponent } from './offline-notes/offline-notes.component';
import { DisplayRefComponent } from './display-ref/display-ref.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'addnote', component: AddNoteComponent, pathMatch: 'full'},
  { path: 'editnote/:id', component: EditNoteComponent, pathMatch: 'full' },
  { path: 'displaynote/:id', component: DisplayNoteComponent, pathMatch: 'full' },
  { path: 'OfflineNotes', component: OfflineNotesComponent, pathMatch: 'full' },
  { path: 'DisplayRef/:id', component: DisplayRefComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
