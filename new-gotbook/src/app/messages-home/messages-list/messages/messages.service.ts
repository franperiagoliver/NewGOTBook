import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Message } from './messages.model';
import { UserService } from '../../../user/user.service';

@Injectable()
export class MessagesService {

  private URLBase = 'http://localhost:3000/';

  constructor(private http: Http) { }

  getAllMessages(): Observable<Message[]> {
    return this.http.get(`${this.URLBase}/message`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  getMessageByCharacter(message: Message): Observable<Message[]> {
    return this.http.get(`${this.URLBase}/message/character/${message.character['id']}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  publishMessage(message: Message): Observable<Message[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.URLBase}/message`, message, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateStateMessage(message: Message): Observable<Message[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.URLBase}/message/${message['id']}`, message, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error) || 'Server error');
  }

}
