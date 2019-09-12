import { Component, OnInit } from '@angular/core';
//其中存放的使用该组件实例对应的路由信息
import { ActivatedRoute } from "@angular/router";
import { IndexService } from '../index.service';
import { MessageService } from '../message.service';
/**
 * 分类详情
 */
@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.css']
})
export class CategoryInfoComponent implements OnInit {
  categoryInfo;

  constructor(private route: ActivatedRoute, private indexService: IndexService, private messageService: MessageService) {

    this.route.queryParamMap.subscribe(params => {
      const categoryId = params.get('categoryId');
      this.indexService.getCategoryInfo(+categoryId).subscribe(result => {
        this.categoryInfo = result;
        // 修改页尾
        // 分类页尾为不显示详情信息
        this.messageService.set('page', 'categoryInfo');
      });
    });
  }

  ngOnInit() {
  }

}
