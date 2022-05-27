import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Post} from "../services/post";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  // @ts-ignore
  posts$: Observable<Post[]>;

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllPostsFromApplicationState();
  }

  onPostDelete($event: Post) {
    this.postsService.deletePost($event.id).then();
  }
}
