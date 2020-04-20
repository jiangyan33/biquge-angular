import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //夜间模式
  private aStyle: any;
  private divStyle: any;

  private flag: Boolean;

  //请求头信息
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  readonly baseUrl = environment.baseUrl;

  //页面信息 初始化为首页
  private page = 'index';

  // 友情链接
  private friendLink = [{ url: "https://angular.cn", name: "angular官网" }];

  // 新书推荐
  private newBook = [{ name: '剑魔独孤求败', id: '1', category_name: '武侠小说' }];

  novelInfo: any;

  constructor(private cookieService: CookieService) {
  }

  get(key: string) {
    return this[key];
  }

  set(key: string, value: any) {
    this[key] = value;
  }

  getCookie(name: string) {
    return this.cookieService.get(name);
  }

  setCookie(name: string, value: string) {
    this.cookieService.set(name, value);
  }
}
