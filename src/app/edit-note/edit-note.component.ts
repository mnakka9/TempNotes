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
      this.notesService.getNote(this.id).subscribe(
        (result) => {
          this.html = result.noteHtml;
          localStorage.setItem(result.id, result.noteHtml);
        },
        (error) => console.log(error)
      );
    }
  }

  ngOnSubmit(): void {
    this.spinner.show();
    this.notesService.EditNote({ id: this.id, noteHtml: this.html }).subscribe(
      (result) => {
        if (result.result) {
          this.spinner.hide();
          alert('Note updated successfully!');
          localStorage.setItem(this.id, this.html);
          this.router.navigateByUrl('/home');
        }
      },
      (error) => console.log(error)
    );
  }
}
