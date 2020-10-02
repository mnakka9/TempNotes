import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public refId: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDisplay(): void {
    this.router.navigateByUrl('/displaynote/' + this.refId);
  }

}
