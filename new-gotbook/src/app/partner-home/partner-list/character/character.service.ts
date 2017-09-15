import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Character } from './character.model';

@Injectable()
export class CharacterService {

private URLBase = 'http://localhost:3000/';

  constructor(private http: Http) { }

  getCharacter(character: Character): Observable<Character[]> {
    return this.http.get(`${this.URLBase}/character/${character['id']}`)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  updateCharacter(character: Character): Observable<Character[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.URLBase}/character/${character['id']}`, character , options)
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
  }

}
