import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../services/post";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  postsCount: number = 0;
  // @ts-ignore
  postsCountFromPromise$: Promise<Post[]>;

  // @ts-ignore
  postsCountFromState$: Observable<Post[]>;

  // @ts-ignore
  postsCountFromStateBehaviourSubject$: BehaviorSubject<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postsCount = this.postService.getPostsCount();
    this.postsCountFromState$ = this.postService.getAllPostsFromApplicationState();
    this.postsCountFromPromise$ = this.postService.getAllPostsAsPromise();
    this.postsCountFromStateBehaviourSubject$ = this.postService.getAllPostsFromApplicationStateAsSubject();
  }

  refresh() {
    this.postsCount = this.postService.getPostsCount();
  }

  letsBreakTheStateOfTheApp() {
    this.postsCountFromStateBehaviourSubject$.next([]);
  }

  letsKillTheAppState() {
    this.postsCountFromStateBehaviourSubject$.complete();
  }
}
