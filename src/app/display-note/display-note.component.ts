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
    this.spinner.show();
    this.getNote();
  }

  getNote(): void {
    const noteHtml = localStorage.getItem(this.id);
    if (noteHtml){
      this.html = noteHtml;
    }
    else{
    this.notesService.getNote(this.id).subscribe(result => {
      this.html = result.noteHtml;
      localStorage.setItem(result.id, result.noteHtml);
      this.spinner.hide();
    }, error => console.log(error));
    }
  }

}
