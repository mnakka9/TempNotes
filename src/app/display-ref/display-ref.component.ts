import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-ref',
  templateUrl: './display-ref.component.html',
  styleUrls: ['./display-ref.component.css']
})
export class DisplayRefComponent implements OnInit {
  public refId: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.refId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
