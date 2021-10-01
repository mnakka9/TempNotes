import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotesAPIService } from '../services/notes-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css'],
})
export class EditNoteComponent implements OnInit {
  public id: string;
  public html: string;
  constructor(
    private router: Router,
    private notesService: NotesAPIService,
    private currentRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.id = this.currentRoute.snapshot.paramMap.get('id');
    const noteHtml = localStorage.getItem(this.id);
    if (noteHtml) {
      this.html = noteHtml;
    } else {
      this.notesService.getNote(this.id).then((note) => {
        this.html = note.noteHtml;
        localStorage.setItem(note.id, note.noteHtml);
      });
    }
  }

  ngOnSubmit(): void {
    this.spinner.show('edit');
    this.notesService
      .EditNote({
        id: this.id,
        noteHtml: this.html,
      })
      .then((res) => {
        if (res) {
          this.spinner.hide('edit');
          alert('Note updated successfully!');
          localStorage.setItem(this.id, this.html);
          this.router.navigateByUrl('/');
        }
      });
  }
}
