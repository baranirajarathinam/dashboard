import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recordings } from './recordings';
import { RECORDINGS } from './mock-recordedprograms';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RecordingsService {
	
  constructor(private messageService: MessageService) { }
  getRecordings(): Observable<Recordings[]> {
    // TODO: send the message _after_ fetching the statuses
    this.messageService.add('RecordingsService: fetched recordings');
    return of(RECORDINGS);
  }
  getRecording(title: String): Observable<Recordings> {
    // TODO: send the message _after_ fetching the recordings
    this.messageService.add(`RecordingsService: fetched recordings title=${title}`);
    return of(RECORDINGS.find(recordings => recordings.title === title));
  }
}
