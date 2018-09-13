import { Component,Input, OnInit } from '@angular/core';
import { Recordings } from '../recordings';
import { RecordingsService } from '../recordings.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recorded',
  templateUrl: './recorded.component.html',
  styleUrls: ['./recorded.component.css']
})
export class RecordedComponent implements OnInit {
 // @Input()
   // videoUrl:string; 

recordings: Recordings[];
dateNow: Date;
public safeURL: SafeResourceUrl;
//videoURL : 'https://www.youtube.com/watch?v=1KT2asqA1J8';
constructor(private recordingsService: RecordingsService, public _sanitizer: DomSanitizer) { 
  this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/kMqeoW3XRa0');
}
ngOnInit() { 
  this.getRecordings();
  this.dateNow = new Date();
  this.dateNow.setDate( this.dateNow.getDate() + 3 );
}

getRecordings(): void {
  this.recordingsService.getRecordings()
      .subscribe(recordings => this.recordings = recordings);
}

  

  

}
