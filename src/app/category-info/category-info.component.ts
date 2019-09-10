import { Component, OnInit } from '@angular/core';
//其中存放的使用该组件实例对应的路由信息
import { ActivatedRoute } from "@angular/router";
import { IndexService } from '../index.service';
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
  constructor(private router: ActivatedRoute, private indexService: IndexService) {
    const id = +this.router.snapshot.paramMap.get('categoryId');
    this.indexService.getCategoryInfo(id).subscribe(result => this.categoryInfo = result);
  }

  ngOnInit() {
  }

}
