import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexService } from '../index.service';
import { MessageService } from '../message.service';

// 内容详情
@Component({
  selector: 'app-novel-info',
  templateUrl: './novel-info.component.html',
  styleUrls: ['./novel-info.component.css']
})
export class NovelInfoComponent implements OnInit {
  // 多定义几个变量
  novelInfo;

  constructor(private route: ActivatedRoute, private indexService: IndexService, private messageService: MessageService) {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      this.indexService.getNovelInfo(+id).subscribe(result => this.novelInfo = result);
    });

    // 修改页尾
    this.messageService.set('selected', 'novelInfo');
  }

  ngOnInit() {
  }

  gotoEnd() {
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;

    window.scrollTo(width, height);
  }

}
