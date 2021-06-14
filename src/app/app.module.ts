import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/lz-data.service";
import { LZForumComponent } from './components/lz-forum/lz-forum.component';
import { LZForumItemComponent } from './components/lz-forum-item/lz-forum-item.component';
import { LZForumDetailsComponent } from './components/lz-forum-details/lz-forum-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LZForumComponent,
    LZForumItemComponent,
    LZForumDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
