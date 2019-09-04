import { Component, OnInit } from '@angular/core';
import { IndexService } from '../index.service';

/**
 * 分类热度
 */
@Component({
  selector: 'app-category-hot',
  templateUrl: './category-hot.component.html',
  styleUrls: ['./category-hot.component.css']
})
export class CategoryHotComponent implements OnInit {

  categoryHot;

  constructor(private indexService: IndexService) {
    this.indexService.getCategoryHotList().subscribe(result => this.categoryHot = result);
  }

  ngOnInit() {
  }

}
