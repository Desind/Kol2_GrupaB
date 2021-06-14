import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lz-forum-item',
  templateUrl: './lz-forum-item.component.html',
  styleUrls: ['./lz-forum-item.component.css']
})
export class LZForumItemComponent implements OnInit {

  @Input() id?: string;
  @Input() title?: string;
  @Input() text?: string;
  @Input() image?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
