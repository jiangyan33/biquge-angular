import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import APIResult from '../entity';
/**
 * 分类详情
 */
@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.css']
})
export class CategoryInfoComponent implements OnInit {
  categoryBook: any;
  updateCategoryBook: any;
  hotCategoryBook: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.http.get(`${this.message.baseUrl}categories/${params.params.categoryId}/books?bookSize=16`)
        .toPromise()
        .then((result: APIResult) => {
          if (result.code === 0) {
            this.categoryBook = result.data.splice(0, 6);
            this.hotCategoryBook = result.data;
            // 修改页尾
            // 分类页尾为不显示详情信息
            this.message.set('page', 'categoryInfo');
          }
        }).catch((err: any) => console.log(err));
    });
    this.route.paramMap.subscribe((params: any) => {
      this.http.get(`${this.message.baseUrl}categories/${params.params.categoryId}/books?bookSize=10&sort=update_date`)
        .toPromise()
        .then((result: APIResult) => {
          if (result.code === 0) {
            this.updateCategoryBook = result.data;
          }
        }).catch((err: any) => console.log(err));
    });
  }
}
