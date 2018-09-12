import { Component, OnInit } from '@angular/core';
import { Status } from '../status';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
statuses: Status[];
dateNow : Date = new Date();

constructor(private statusService: StatusService) { }
ngOnInit() { 
  this.getStatuses();
}

getStatuses(): void {
  this.statusService.getHeroes()
      .subscribe(statuses => this.statuses = statuses);
}

  

  

}
