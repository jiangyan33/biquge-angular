import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  // 获取分类列表
  getCategoryList() {
    return this.http.get(`${this.messageService.get('baseUrl')}Category/category.ac`);
  }

  // 获取热度内容
  getHotList(categoryId?) {
    let url = `${this.messageService.get('baseUrl')}Novel/${categoryId ? 'categoryInfo' : 'findHot'}.ac`;
    let options = {
      categoryId
    };
    return this.http.get(url, { params: options });
  }

  // 获取分类热度内容
  getCategoryHotList() {
    return this.http.get(`${this.messageService.get('baseUrl')}Novel/categoryHot.ac`);
  }

  //最新更新
  getUpdateList() {
    return this.http.get(`${this.messageService.get('baseUrl')}Novel/newUpdateList.ac`);
  }
  //最新入库
  getAddList() {
    return this.http.get(`${this.messageService.get('baseUrl')}Novel/newAddList.ac`);
  }
}
