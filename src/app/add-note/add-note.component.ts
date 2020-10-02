import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesAPIService } from '../services/notes-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
    this.spinner.show();
    this.notesService.AddNote(this.html).subscribe(
      (result) => {
        this.spinner.hide();
        this.router.navigateByUrl(`DisplayRef/${result.id}`);
      },
      (error) => console.log(error)
    );
  }
}
