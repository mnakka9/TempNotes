import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotesAPIService } from '../services/notes-api.service';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent implements OnInit {
  public id: string; public html: string;

  constructor(private activatedRoute: ActivatedRoute, private notesService: NotesAPIService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.spinner.show('display');
    this.getNote();
  }

  getNote(): void {
    const noteHtml = localStorage.getItem(this.id);
    if (noteHtml) {
      this.html = noteHtml;
    } else {
      this.notesService.getNote(this.id).then((note) => {
        this.html = note.noteHtml;
        localStorage.setItem(note.id, note.noteHtml);
        this.spinner.hide('display');
      });
    }
  }

}
