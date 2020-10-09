import { SummaryPipe } from './../../../helpers/pipes/summary-pipe';
import { DayPicture } from './../../models/DayPicture';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class ContentComponent implements OnInit {

@Input() pictureObject: DayPicture[]
  constructor() { }

  ngOnInit(): void {
  }

}
