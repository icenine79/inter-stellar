import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {
@Input() cameraData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
