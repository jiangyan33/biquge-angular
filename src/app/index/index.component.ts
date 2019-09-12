import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';
import { MessageService } from '../message.service';

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

  constructor(private indexService: IndexService, private messageService: MessageService) {
    this.indexService.getHotList().subscribe(result => {
      this.hotList = result;
      // 修改页尾
      this.messageService.set('page', 'index');
    });
  }

  ngOnInit() {
  }

}
