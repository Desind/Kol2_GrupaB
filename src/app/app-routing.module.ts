import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LZForumComponent} from "./components/lz-forum/lz-forum.component";
import {LZForumDetailsComponent} from "./components/lz-forum-details/lz-forum-details.component";

const routes: Routes = [
  {
    path: '',
    component: LZForumComponent,
  },
  {
    path: 'details/:id',
    component: LZForumDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
