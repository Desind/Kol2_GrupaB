import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/lz-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lz-forum-details',
  templateUrl: './lz-forum-details.component.html',
  styleUrls: ['./lz-forum-details.component.css']
})
export class LZForumDetailsComponent implements OnInit {

  public id?: string;
  public title?: string;
  public text?: string;
  public image?: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string | null;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
        this.dataService.getById(id).subscribe((res: any) => {
          this.id = res['id'];
          this.title = res['title'];
          this.text = res['text'];
          this.image = res['image'];
        });
      });
  }

}
