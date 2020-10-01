import { cameras } from './../../../global definitions/globals';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
camera='';
@Output() selectedCamera: EventEmitter<any>= new EventEmitter<any>()
readonly cameras = cameras;
  constructor() { }

  ngOnInit(): void {
  }
  searchByCamera(){
    this.selectedCamera.emit(this.camera)
  }
}
