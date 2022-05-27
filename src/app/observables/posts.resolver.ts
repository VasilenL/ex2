import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {forkJoin} from 'rxjs';
import {PostService} from "../services/post.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<any> {

  constructor(private postsService: PostService) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return new Promise((resolve, reject) => {
      forkJoin([
        this.postsService.getAllPosts()
      ])
        .subscribe((data: any) => {
          return resolve(true);
        });
    });
  }
}
