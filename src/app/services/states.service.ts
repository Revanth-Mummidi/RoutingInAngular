import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  subject = new Subject<number>();
  behaviorSubject = new BehaviorSubject<number>(10);
  constructor() { 
    this.subject.next(0);
  }
}
