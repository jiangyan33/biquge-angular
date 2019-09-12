import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexService } from '../index.service';
import { MessageService } from '../message.service';

//内容
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  novelInfo;
  contentInfo;

  constructor(private route: ActivatedRoute, private indexService: IndexService, private messageService: MessageService) {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      const categoryId = params.get('categoryId');

      this.indexService.getContent(id, +categoryId).subscribe(result => {
        this.novelInfo = result[0];
        this.contentInfo = result[1];
        this.contentInfo.content = '&nbsp;&nbsp;&nbsp;&nbsp;' + this.contentInfo.content.replace(/\n/g, '<br> &nbsp;&nbsp;&nbsp;&nbsp;');
        // 修改页尾
        this.messageService.set('page', 'contentInfo');
        this.messageService.set('novelInfo', this.novelInfo);
      });
    });
  }

  ngOnInit() {
  }

}
