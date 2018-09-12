import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Status } from './status';
import { STATUSES } from './mock-statuses';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
	
  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Status[]> {
    // TODO: send the message _after_ fetching the statuses
    this.messageService.add('StatusService: fetched statuses');
    return of(STATUSES);
  }
  getHero(title: String): Observable<Status> {
    // TODO: send the message _after_ fetching the status
    this.messageService.add(`StatusService: fetched status title=${title}`);
    return of(STATUSES.find(hero => hero.title === title));
  }
}
