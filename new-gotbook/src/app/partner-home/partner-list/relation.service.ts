import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Relation } from './relation.model';

@Injectable()
export class RelationService {

  private URLBase = 'http://localhost:3000/';
  constructor(private http: Http) { }

  getRelation(relation: Relation): Observable<Relation[]> {
    return this.http.get(`${this.URLBase}/character/${relation['id']}/relate`)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  updateRelation(relation: Relation): Observable<Relation[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.URLBase}/character/${relation.requester['id']}/relate/${relation.requested['id']}`, relation, options)
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
  }

  deleteRelation(relation: Relation): Observable<Relation[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete(`${this.URLBase}/character/${relation.requester['id']}/relate/${relation.requested['id']}`)
                    .map((res: Response) => res.json())
                    .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
  }

}
