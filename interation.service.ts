import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterationService {

  private _messageSource = new Subject<string>();
  Message$ = this._messageSource.asObservable();

  constructor() { }

  sendMessage(message: string){
    this._messageSource.next(message);
  }



}
