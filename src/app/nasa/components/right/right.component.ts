import { SimpleChanges } from '@angular/core';
import { ChangeDetectionStrategy, Component, Input, OnInit, OnChanges } from '@angular/core';
import { RoverCamera } from '../../../global-features/models/RoverCameras';
import { DayPicture } from '../../models/DayPicture';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RightComponent implements OnInit {
  @Input('rover') rover: RoverCamera[];
  @Input('dataSource') dataSource: RoverCamera[];
  @Input('displayedColumns') displayedColumns: any[];
  display:boolean=false

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    if (this.rover && this.rover.length >0) {
          this.display = false;
        }
      }
  ngOnInit(): void {
  }

}
