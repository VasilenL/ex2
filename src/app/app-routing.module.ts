import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {KeklComponent} from "./kekl/kekl.component";
import {Kekl2Component} from "./kekl2/kekl2.component";
import {ContentComponent} from "./content/content.component";
import {PromisesComponent} from "./promises/promises.component";
import {ObservablesComponent} from "./observables/observables.component";
import {SubjectsComponent} from "./subjects/subjects.component";
import {PostsResolver} from "./observables/posts.resolver";

const routes: Routes = [
  {path: '', redirectTo: 'promises', pathMatch: 'full'},
  {
    path: 'promises', component: PromisesComponent
  },
  {
    path: 'observables', component: ObservablesComponent,
    resolve: {
      postsSuccess: PostsResolver
    }
  },
  {
    path: 'subjects', component: SubjectsComponent,
    resolve: {
      postsSuccess: PostsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
