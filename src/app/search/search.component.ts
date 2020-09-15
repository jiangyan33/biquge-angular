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
    this.route.paramMap.subscribe((params: any) => {
      this.value = params.params.value;
      this.http.get(`${this.message.baseUrl}books?search=${this.value}`,).toPromise().then((result: APIResult) => {
        if (result.code === 0) {
          this.bookList = result.data.data;
          // 修改页尾
          this.message.set('page', 'index');
        }
      }).catch((err: any) => console.log(err));
    });
  }
}
