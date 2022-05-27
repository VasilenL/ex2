import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./post";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";
import {flatMap} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // Subject -> BehaviorSubject -> ReplaySubject
  posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  postCount: number = 0;

  constructor(private httpClient: HttpClient) {
  }

  getPostsCount() {
    return this.postCount;
  }

  deletePost(id: string) {
    return this.httpClient
      .delete(environment.apiBackendEndpoint + '/posts/' + id)
      .pipe(
        flatMap(() => this.getAllPosts())
      )
      .toPromise();
  }

  getAllPosts() {
    return this.httpClient.get<Post[]>(environment.apiBackendEndpoint + '/posts')
      .pipe(
        tap((posts) => {
          this.postCount = posts.length;
          this.posts$.next(posts);
        })
      );
  }

  getAllPostsAsPromise() {
    return this.httpClient.get<Post[]>(environment.apiBackendEndpoint + '/posts')
      .pipe(
        tap((posts) => {
          this.postCount = posts.length;
        })
      )
      .toPromise();
  }

  getAllPostsFromApplicationState() {
    return this.posts$.asObservable();
  }

  getAllPostsFromApplicationStateAsSubject() {
    return this.posts$;
  }
}
