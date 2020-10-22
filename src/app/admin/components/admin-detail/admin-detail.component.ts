import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../global-features/models/User';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.scss'],
})
export class AdminDetailComponent implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.data.subscribe((data:any) => {
      this.user=Array.of(data);
      console.log(this.user)
    });
  }
}
