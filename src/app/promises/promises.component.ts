import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../services/post";

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {
  // @ts-ignore
  posts$: Promise<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getAllPostsAsPromise();
  }

  onPostDelete($event: Post) {
    this.postService.deletePost($event.id)
      .then(() => this.posts$ = this.postService.getAllPostsAsPromise());
  }
}
