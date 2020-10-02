import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule  } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { DisplayNoteComponent } from './display-note/display-note.component';
import { OfflineNotesComponent } from './offline-notes/offline-notes.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { DisplayRefComponent } from './display-ref/display-ref.component';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';
import { HomeComponent } from './home/home.component';
import { NotesAPIService } from './services/notes-api.service';
import { NavMenuComponent } from './nav-menu/nav-menu-component';

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    DisplayNoteComponent,
    OfflineNotesComponent,
    EditNoteComponent,
    DisplayRefComponent,
    HomeComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    HttpClientModule,
    ClipboardModule,
    NgxSpinnerModule
  ],
  providers: [NotesAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
