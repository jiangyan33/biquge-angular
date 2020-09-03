import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import APIResult from '../entity';
/**
 * 最近更新和入库
 */
@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

  newUpdateList: any;
  newAddList: any;
  constructor(
    private http: HttpClient,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.http.get(`${this.message.baseUrl}books?isAsc=false&sort=create_date&pageSize=20&pageNum=1&updateCount=1`).toPromise().then((result: APIResult) => {
      if (result.code === 0) {
        this.newAddList = result.data.data;
      }
    }).catch((err: any) => console.log(err));

    this.http.get(`${this.message.baseUrl}books?isAsc=false&sort=update_date&pageSize=20&pageNum=1&updateCount=1`).toPromise().then((result: APIResult) => {
      if (result.code === 0) {
        this.newUpdateList = result.data.data;
      }
    }).catch((err: any) => console.log(err));
  }
}
