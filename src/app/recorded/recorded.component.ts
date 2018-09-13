import { Component, OnInit } from '@angular/core';
import { Status } from '../status';
import { StatusService } from '../status.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recorded',
  templateUrl: './recorded.component.html',
  styleUrls: ['./recorded.component.css']
})
export class RecordedComponent implements OnInit {
statuses: Status[];
dateNow: Date;
public safeURL: SafeResourceUrl;
//videoURL : 'https://www.youtube.com/watch?v=1KT2asqA1J8';
constructor(private statusService: StatusService, private _sanitizer: DomSanitizer) { 
  this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/WovwuOFBUuY');
}
ngOnInit() { 
  this.getStatuses();
  this.dateNow = new Date();
  this.dateNow.setDate( this.dateNow.getDate() + 3 );
}

getStatuses(): void {
  this.statusService.getHeroes()
      .subscribe(statuses => this.statuses = statuses);
}

  

  

}
