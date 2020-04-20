import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import APIResult from '../entity';
/**
 * 首页
 */
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  hotList: any;

  constructor(
    private http: HttpClient,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.http.get(`${this.message.baseUrl}Novel/findHot.ac`).toPromise().then((result: APIResult) => {
      if (result.code === 200) {
        this.hotList = result.data;
        this.message.set('page', 'index');
      }
    }).catch((err: any) => console.log(err));
  }

}
