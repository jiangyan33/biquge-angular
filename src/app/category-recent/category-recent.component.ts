import { Component, OnInit, Input } from '@angular/core';

/**
 * 分类详情热度,最近更新
 */
@Component({
  selector: 'app-category-recent',
  templateUrl: './category-recent.component.html',
  styleUrls: ['./category-recent.component.css']
})
export class CategoryRecentComponent implements OnInit {
  @Input() hotList;
  @Input() recentUpdateList;
  @Input() categoryName;
  constructor() {
  }

  ngOnInit() {
  }

}
