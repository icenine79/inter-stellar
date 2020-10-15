import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.scss']
})
export class AdminDetailComponent implements OnInit {
id:string;
  constructor(private route:ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params=>{
      this.id=params.get('id')
      console.log(this.id)
    })
  }

}
