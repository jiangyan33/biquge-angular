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
  categoryInfo: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: any) => {
      this.http.get(`${this.message.baseUrl}Novel/categoryInfo.ac`, { params: { categoryId: params.categoryId } })
        .toPromise()
        .then((result: APIResult) => {
          if (result.code === 200) {
            this.categoryInfo = result.data;
            // 修改页尾
            // 分类页尾为不显示详情信息
            this.message.set('page', 'categoryInfo');
          }
        }).catch((err: any) => console.log(err));
    });
  }
}
