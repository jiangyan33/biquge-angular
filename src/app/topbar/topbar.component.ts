import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import APIResult from '../entity';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  // 当从主页进入详情时将一些数据写入到messageService中
  formData = new FormGroup({
    searchKey: new FormControl('')
  });
  categoryList: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private message: MessageService
  ) { }

  ngOnInit() {
    this.http.get(`${this.message.baseUrl}Category/category.ac`).toPromise().then((result: APIResult) => {
      if (result.code === 200) {
        this.categoryList = result.data;
      }
    }).catch((err: any) => console.log(err));
  }

  getMessage(name: string) {
    return this.message.get(name);
  }

  search() {
    const formData = this.formData.value;
    if (formData.searchKey.trim()) {
      this.router.navigate([`/book/searchInfo/${formData.searchKey}`]);
    }
  }

}
