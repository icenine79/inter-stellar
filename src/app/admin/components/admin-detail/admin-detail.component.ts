import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.scss']
})
export class AdminDetailComponent implements OnInit {
  constructor (private route: ActivatedRoute) {}
  ngOnInit() {
     this.route.data.subscribe(data => console.log('Data :', data));
  }
}
