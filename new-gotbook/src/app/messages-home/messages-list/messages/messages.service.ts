import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Message } from './messages.model';
import { UserService } from '../../../user/user.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MessagesService {

  private URLBase = 'http://localhost:3000';
  private subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  myStream$ = this.subject.asObservable();

  constructor(private http: Http) { }

  getAllMessages(): Observable<Message[]> {
    return this.http.get(`${this.URLBase}/message`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getMessageByCharacter(): Observable<Message[]> {
    return this.http.get(`${this.URLBase}/message/?character.id=0`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  publishMessage(message: Message): Observable<Message[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.URLBase}/message`, message, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      .finally(() => this.subject.next(true));
  }

}
