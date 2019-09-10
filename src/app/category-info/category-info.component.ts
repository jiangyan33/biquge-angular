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
  // 更新
  recentUpdateList;
  // 详情热度
  hotList;
  // 其他热度
  otherHotList;
  // 分类名称
  categoryName;

  constructor(private router: ActivatedRoute, private indexService: IndexService, private messageService: MessageService) {
    this.router.queryParamMap.subscribe(params => {
      const categoryId = params.get('categoryId');
      this.indexService.getCategoryInfo(+categoryId).subscribe(result => {
        this.hotList = result[0];
        this.recentUpdateList = result[2];
        this.otherHotList = result[1];
        this.categoryName = result[0][0] ? result[0][0].category_name : '';
      });
    });

    // 修改页尾
    this.messageService.set('selected', 'categoryInfo');

    console.log(this.messageService.get('selected'));
  }

  ngOnInit() {
  }

}
