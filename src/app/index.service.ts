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
  getHotList() {
    return this.http.get(`${this.messageService.get('baseUrl')}Novel/findHot.ac`);
  }
}
