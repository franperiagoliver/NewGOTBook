import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Relation } from './relation.model';

@Injectable()
export class RelationService {

  private URLBase = 'http://localhost:3000';
  constructor(private http: Http) { }

  getRelation(): Observable<Relation[]> {
    return this.http.get(`${this.URLBase}/relation/?requester.id=0`)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getRequester(): Observable<Relation[]> {
    return this.http.get(`${this.URLBase}?requester.id=1`)
    .map( (res: Response) => res.json() )
    .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
  }

  getRequested(): Observable<Relation[]> {
    return this.http.get(`${this.URLBase}?requested.id=1`)
    .map( (res: Response) => res.json() )
    .catch( (error: any) => Observable.throw(error.json().error || 'Server error') );
  }

  updateRelation(relation: Relation): Observable<Relation[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.URLBase}/relation/${relation.requester['id']}/related/${relation.requested['id']}`, relation, options)
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
  }

  deleteRelation(relation: Relation): Observable<Relation[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${this.URLBase}/relation/${relation.requester['id']}/related/${relation.requested['id']}`)
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
  }

}
