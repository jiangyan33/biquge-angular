import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';

/**
 * 最近更新和入库
 */
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  newUpdateList;
  newAddList;
  constructor(private indexService: IndexService) {
    this.indexService.getAddList().subscribe(result => this.newAddList = result);
    this.indexService.getUpdateList().subscribe(result => this.newUpdateList = result);
  }

  ngOnInit() {
  }

}
