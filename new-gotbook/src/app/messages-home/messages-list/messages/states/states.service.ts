import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { State } from './states.model';

@Injectable()
export class StatesService {

  private URLBase = 'http://localhost:3000';

  constructor(private http: Http) {}

  getAllStates(): Observable<State[]> {
    return this.http.get(`${this.URLBase}/state`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  updateState(state: State): Observable<State[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.URLBase}/state/${state['id']}`, state, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
  }

  postState(state: State): Observable<State[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.URLBase}/state/`, state, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
  }


}
