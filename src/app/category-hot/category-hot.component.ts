import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import APIResult from '../entity';
/**
 * 分类热度
 */
@Component({
  selector: 'app-category-hot',
  templateUrl: './category-hot.component.html',
  styleUrls: ['./category-hot.component.css']
})
export class CategoryHotComponent implements OnInit {

  categoryHot: any;

  constructor(
    private http: HttpClient,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.http.get(`${this.message.baseUrl}Novel/categoryHot.ac`).toPromise().then((result: APIResult) => {
      if (result.code === 200) {
        this.categoryHot = result.data;
      }
    }).catch((err: any) => console.log(err));
  }

}
