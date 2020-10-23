import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import APIResult from '../entity';
import { Style } from './style';
import { StyleValue } from './style-value';

// 内容
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
  // 样式值
  styleValue: StyleValue;
  // 样式
  style: Style;
  currentPage: any;
  previousPage: any;
  nextPage: any;
  bookInfo: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private message: MessageService
  ) { }

  // 样式变更
  change(event: { target: { name: any; value: any; }; }) {
    const typeEnum = ['font', 'color', 'width', 'size', 'bgcolor'];
    const type = event.target.name;
    const value = event.target.value;

    const index = typeEnum.findIndex(it => it === type);

    if (index !== -1) {
      // 变更前后数据发生了变化时才改变
      if (value !== this.styleValue[typeEnum[index]]) {
        this.styleValue[typeEnum[index]] = value;
      }
      // 设置cookie
      this.message.setCookie(typeEnum[index], value);
    }
    this.setStyle();
  }

  setStyle() {
    this.style = {
      'color': this.styleValue.color,
      'background-color': this.styleValue.bgcolor,
      'font-size': this.styleValue.size,
      'font-family': this.styleValue.font,
      'width': this.styleValue.width
    };
  }

  setNight() {
    this.styleValue.night = this.styleValue.night === '0' ? '1' : '0';
    this.setNightStyle(this.styleValue.night);
    // 写入cookie
    this.message.setCookie('night', this.styleValue.night);
  }

  setNightStyle(night: string) {
    if (night === '1') {
      this.message.set('aStyle', { 'color': '#939392' });
      this.message.set('divStyle', { 'background-color': '#111111' });
    } else {
      this.message.set('aStyle', { 'color': '' });
      this.message.set('divStyle', { 'background-color': '' });
    }
  }

  ngOnInit() {
    // 初始化数据
    this.getData();
    // 初始化cookie night,font,color,width,size,bgcolor
    this.styleValue = {
      font: this.message.getCookie('font') || '方正启体简体',
      color: this.message.getCookie('color') || '#2E8B57',
      width: this.message.getCookie('width') || '95%',
      size: this.message.getCookie('size') || '14pt',
      bgcolor: this.message.getCookie('bgcolor') || '',
      night: this.message.getCookie('night') || '0',
    };
    // 设置样式
    this.setStyle();
    // 首次进入判断是否为夜间模式
    if (this.styleValue.night === '1') {
      this.setNightStyle('1');
    }
  }

  ngOnDestroy() {
    // 该组件结束时清空夜间模式
    this.setNightStyle('0');
  }

  getMessage(name: string) {
    return this.message.get(name);
  }

  getData() {
    this.route.paramMap.subscribe(async (params: any) => {
      let result = await this.http.get<APIResult>(`${this.message.baseUrl}contents/${params.params.chapterId}`).toPromise();
      if (result.code === 0) {
        if (result.data) {
          var value = await this.http.get(result.data.result.currentPage.remark, { responseType: "text" }).toPromise();
          result.data.result.currentPage.remark = '&nbsp;&nbsp;&nbsp;&nbsp;' + value.replace(/\n/g, '<br> &nbsp;&nbsp;&nbsp;&nbsp;');
          this.currentPage = result.data.result.currentPage;
          this.bookInfo = result.data.book;
          this.previousPage = result.data.result.previousPage;
          this.nextPage = result.data.result.nextPage;
          // 修改页尾
          this.message.set('page', 'contentInfo');
        }
      }
    })
  }
}