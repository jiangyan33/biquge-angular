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
  novelInfo: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.http.post(`${this.message.baseUrl}Novel/info.ac`, { id: params.params.bookId }).toPromise().then((result: APIResult) => {
        if (result.code === 200) {
          this.novelInfo = result.data;
          // 修改页尾
          this.message.set('page', 'novelInfo');
          this.message.set('novelInfo', this.novelInfo);
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
