import { Component, OnInit, Input } from '@angular/core';
import { IndexService } from '../index.service';

@Component({
  selector: 'app-hot-content',
  templateUrl: './hot-content.component.html',
  styleUrls: ['./hot-content.component.css']
})
export class HotContentComponent implements OnInit {

  hotList;

  constructor(private indexService: IndexService) {
    this.hotList = this.indexService.getHotList();
  }

  ngOnInit() {
  }

}
