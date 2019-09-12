import { Injectable } from '@angular/core';
import { MessageService } from "./message.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  options;
  constructor(private messageService: MessageService, private http: HttpClient) {
    this.options = this.messageService.get('httpOptions');
  }

  // 获取分类列表
  getCategoryList() {
    return this.http.get(`${this.messageService.get('baseUrl')}Category/category.ac`);
  }

  // 获取热度内容
  getHotList() {
    return this.http.get(`${this.messageService.get('baseUrl')}Novel/findHot.ac`);
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

  //分类详情
  getCategoryInfo(categoryId) {
    let options = {
      categoryId
    };
    return this.http.get(`${this.messageService.get('baseUrl')}Novel/categoryInfo.ac`, { params: options });
  }

  //目录详情
  getNovelInfo(id) {
    let options = {
      id
    };
    return this.http.get(`${this.messageService.get('baseUrl')}Novel/info.ac`, { params: options });
  }

  //内容
  getContent(id, categoryId: number) {
    let options = {
      id,
      categoryId
    };
    return this.http.post(`${this.messageService.get('baseUrl')}Novel/content.ac`, options, this.options);
  }
}
