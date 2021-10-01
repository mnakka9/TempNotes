import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NoteC } from 'src/NoteC';
import { AddResult, EditResult, Note } from '../Note';
declare const Parse: any;

@Injectable({
  providedIn: 'root',
})
export class NotesAPIService {
  public baseUrl = 'http://tempnotesapi.azurewebsites.net/Note/';
  public note: Note;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':
        'http://localhost:4200/, https://dist-afejrjibje.now.sh',
    }),
  };
  constructor(private http: HttpClient) {
    Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
    Parse.serverURL = environment.serverURL;
  }

  async getNote(id: string): Promise<Note> {
    let note: Note = new NoteC();
    const Notes = Parse.Object.extend('Notes');
    const query = new Parse.Query(Notes);
    // here you put the objectId that you want to update
    try {
      const object = await query.get(id);
      note.id = id;
      note.noteHtml = object.get('Note');
      return note;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async AddNote(note: Note): Promise<string> {
    const myNewObject = new Parse.Object('Notes');
    myNewObject.set('Note', note.noteHtml);
    myNewObject.set('CanBeDeleted', true);
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('Notes created', result);
      return result.id;
    } catch (error) {
      console.error('Error while creating Notes: ', error);
      return null;
    }
  }

  async EditNote(note: Note): Promise<boolean> {
    const Notes = Parse.Object.extend('Notes');
    const query = new Parse.Query(Notes);
    try {
      // here you put the objectId that you want to update
      const object = await query.get(note.id);
      object.set('Note', note.noteHtml);
      object.set('CanBeDeleted', true);
      try {
        const response = await object.save();
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        // Access the Parse Object attributes using the .GET method
        console.log(response.get('Note'));
        console.log(response.get('CanBeDeleted'));
        console.log('Notes updated', response);
        return true;
      } catch (error) {
        console.error('Error while updating Notes', error);
      }
    } catch (error) {
      console.error('Error while retrieving object Notes', error);
    }
    return false;
  }
}
