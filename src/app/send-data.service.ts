import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

private messageSrc = new BehaviorSubject<string>('default message');
currentMsg = this.messageSrc.asObservable();

 
  constructor() { 
 
    
  }

  changeMessage(message: string) {
    this.messageSrc.next(message);
  }

 
}
