import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {AppRoutingModule} from './app-routing.module';
import {KeklComponent} from "./kekl/kekl.component";
import { Kekl2Component } from './kekl2/kekl2.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FriendsActivityComponent } from './friends-activity/friends-activity.component';
import { MusicComponent } from './music/music.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    KeklComponent,
    Kekl2Component,
    HeaderComponent,
    SidebarComponent,
    FriendsActivityComponent,
    MusicComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
