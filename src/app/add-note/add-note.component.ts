import { Component, OnInit } from '@angular/core';
import { NotesAPIService } from '../services/notes-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Guid } from 'guid-typescript';
import { Note } from '../Note';
import { Router } from '@angular/router';
import { NoteC } from 'src/NoteC';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent implements OnInit {
  public html = '<p>Add your note here!</p>';

  constructor(
    private notesService: NotesAPIService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  ngOnSubmit(): void {
    this.spinner.show('add');
    let note: Note = new NoteC();
    const id = Guid.create().toString();
    note.id = id;
    note.noteHtml = this.html;
    this.notesService.AddNote(note).then((id) => {
      this.spinner.hide('add');
      this.router.navigateByUrl(`DisplayRef/${id}`);
    });
  }
}
