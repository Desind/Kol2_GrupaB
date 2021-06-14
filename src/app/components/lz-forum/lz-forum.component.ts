import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/lz-data.service";

@Component({
  selector: 'app-lz-forum',
  templateUrl: './lz-forum.component.html',
  styleUrls: ['./lz-forum.component.css']
})
export class LZForumComponent implements OnInit {

  public items$: any;
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
