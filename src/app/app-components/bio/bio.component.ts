import { Component, OnInit } from '@angular/core';
import { Animations } from './bioanimations';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
  animations: [
    Animations.animeTrigger
]
})
export class BioComponent implements OnInit {
  isCollapsed:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
