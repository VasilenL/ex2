import { Component, OnInit } from '@angular/core';
import {Post} from "../services/post";
import {PostService} from "../services/post.service";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  // @ts-ignore
  posts$: BehaviorSubject<Post[]>;

  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getAllPostsFromApplicationStateAsSubject();
  }

  onPostDelete($event: Post) {
    this.postsService.deletePost($event.id).then();
  }
}
