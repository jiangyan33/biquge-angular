import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import APIResult from '../entity';

// 内容详情
@Component({
  selector: 'app-novel-info',
  templateUrl: './novel-info.component.html',
  styleUrls: ['./novel-info.component.css']
})
export class NovelInfoComponent implements OnInit {
  book: any;
  contentList: any;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.http.get(`${this.message.baseUrl}books/${params.params.bookId}`).toPromise().then((result: APIResult) => {
        if (result.code === 0) {
          this.book = result.data.book;
          this.book.intro = this.book.intro.split('\n').filter((it: string) => it.trim());;

          this.contentList = result.data.contentList;
          // 修改页尾
          this.message.set('page', 'novelInfo');
          // todo:这个不清楚做什么的
          // this.message.set('novelInfo', this.novelInfo);
        }
      }).catch((err: any) => console.log(err));
    });
  }

  gotoEnd() {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    window.scrollTo(width, height);
  }

}
