import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { PostService } from 'src/app/shared/posts.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postService.getAll()
      .subscribe(res=> console.dir(res))
  }


}
