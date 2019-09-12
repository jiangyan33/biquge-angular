import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //请求头信息
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private baseUrl = 'http://127.0.0.1:3999/api/';

  // 页尾初始化为首页
  selected = 'index';

  // 友情链接
  private firendLink = [{ url: "https://angular.cn", name: "angular官网" }];

  // 新书推荐
  private newBook = [{ name: '剑魔独孤求败', id: '1', category_name: '武侠小说' }];

  novelInfo;

  constructor() { }

  get(key) {
    return this[key];
  }

  set(key, value) {
    this[key] = value;
  }
}
