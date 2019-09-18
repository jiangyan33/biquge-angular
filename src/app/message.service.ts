import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
// declare var _DEV_: boolean;

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //夜间模式
  private aStyle;
  private divStyle;

  private flag: Boolean;

  //请求头信息
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private baseUrl = 'http://62.234.108.185:4999/api/';

  //页面信息 初始化为首页
  private page = 'index';

  // 友情链接
  private friendLink = [{ url: "https://angular.cn", name: "angular官网" }];

  // 新书推荐
  private newBook = [{ name: '剑魔独孤求败', id: '1', category_name: '武侠小说' }];

  novelInfo;

  constructor(private cookieService: CookieService) {
  }

  get(key) {
    return this[key];
  }

  set(key, value) {
    this[key] = value;
  }

  getCookie(name) {
    return this.cookieService.get(name);
  }

  setCookie(name, value) {
    this.cookieService.set(name, value);
  }
}
