import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './note-component.component.html',
  styleUrls: ['./note-component.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;

  constructor(){

  }

  collapse(): void {
    this.isExpanded = false;
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {
  }

}
