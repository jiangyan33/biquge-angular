import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import APIResult from '../entity';
import { ActivatedRoute } from '@angular/router';

// 搜索内容
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  bookList: any;
  value: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params: any) => {
      this.value = params.searchKey;
      this.http.get(`${this.message.baseUrl}Feature/search.ac`).toPromise().then((result: APIResult) => {
        if (result.code === 200) {
          this.bookList = result.data;
          // 修改页尾
          this.message.set('page', 'index');
        }
      }).catch((err: any) => console.log(err));
    });
  }
}
