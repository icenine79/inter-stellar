import { cameras } from './../../../global-features/globals';
import { Component, EventEmitter, OnInit, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss'],
})
export class LeftComponent implements OnInit {
  @Output() selectedCamera: EventEmitter<any> = new EventEmitter<any>();
  camera: '';
  cameras = cameras;
  constructor() {}


  ngOnInit(): void {}
  searchByCamera() {
    this.selectedCamera.emit(this.camera);
  }
}
