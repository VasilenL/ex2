import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {KeklComponent} from "./kekl/kekl.component";
import {Kekl2Component} from "./kekl2/kekl2.component";
import {ContentComponent} from "./content/content.component";

const routes: Routes = [
  {path: '', redirectTo: 'KEKL', pathMatch: 'full'},
  {
    path: 'KEKL', component: ContentComponent
  },
  {path: 'KEKL2', component: Kekl2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
