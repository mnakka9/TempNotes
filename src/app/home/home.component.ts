import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotesAPIService } from '../services/notes-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public refId: string;
  public error:boolean = false;
  constructor(private router: Router, private service: NotesAPIService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  textChanged(){
    this.error = false;
  }

  navigateToDisplay(): void {
    this.spinner.show();
    this.service.getNote(this.refId).then((note) => {
      if(note){
      localStorage.setItem(note.id, note.noteHtml);
      this.error = false;
      this.router.navigateByUrl('/displaynote/' + this.refId);
      }
      else{
        this.error = true;
        this.refId = null;
      }
      this.spinner.hide();
    }, (err) => {
      this.error = true;
      this.refId = null;
      console.log(err);
      this.spinner.hide();
    });

    this.spinner.hide();
  }

}
