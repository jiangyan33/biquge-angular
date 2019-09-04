import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';

/**
 * 首页
 */
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  hotList: any;

  constructor(private indexService: IndexService) {
    this.indexService.getHotList().subscribe(result => this.hotList = result);;
  }

  ngOnInit() {
  }

}
