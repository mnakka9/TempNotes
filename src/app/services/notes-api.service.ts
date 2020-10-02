import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddResult, EditResult, Note } from '../Note';

@Injectable({
  providedIn: 'root',
})
export class NotesAPIService {
  public baseUrl = 'http://tempnotesapi.azurewebsites.net/Note/';
  public note: Note;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/, https://dist-afejrjibje.now.sh',
    }),
  };
  constructor(private http: HttpClient) {}

  getNote(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.baseUrl}${id}`, this.httpOptions).pipe();
  }

  AddNote(html: string): Observable<AddResult> {
    return this.http
      .post<AddResult>(
        `${this.baseUrl}AddNote`,
        JSON.stringify({ noteHtml: html }),
        this.httpOptions
      )
      .pipe();
  }

  EditNote(note: Note): Observable<any> {
    return this.http
      .post<any>(
        `${this.baseUrl}EditNote`,
        JSON.stringify({ id: note.id, noteHtml: note.noteHtml }),
        this.httpOptions
      )
      .pipe();
  }
}
