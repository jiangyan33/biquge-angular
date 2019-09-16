import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexService } from '../index.service';
import { MessageService } from '../message.service';
import { Style } from './style';
import { StyleValue } from './style-value';

//内容
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  //样式值
  styleValue: StyleValue;
  // 样式
  style: Style;

  novelInfo;
  contentInfo;

  constructor(private route: ActivatedRoute, private indexService: IndexService, private messageService: MessageService) {
    this.route.queryParamMap.subscribe(params => {
      const id = params.get('id');
      const categoryId = params.get('categoryId');

      this.indexService.getContent(id, +categoryId).subscribe(result => {
        this.novelInfo = result[0];
        this.contentInfo = result[1];
        this.contentInfo.content = '&nbsp;&nbsp;&nbsp;&nbsp;' + this.contentInfo.content.replace(/\n/g, '<br> &nbsp;&nbsp;&nbsp;&nbsp;');
        // 修改页尾
        this.messageService.set('page', 'contentInfo');
        this.messageService.set('novelInfo', this.novelInfo);
      });
    });

    //初始化cookie night,font,color,width,size,bgcolor
    this.styleValue = {
      font: this.messageService.getCookie('font') || '方正启体简体',
      color: this.messageService.getCookie('color') || '#2E8B57',
      width: this.messageService.getCookie('width') || '95%',
      size: this.messageService.getCookie('size') || '14pt',
      bgcolor: this.messageService.getCookie('bgcolor') || '',
      night: this.messageService.getCookie('night') || '',
    };

    //设置样式
    this.setStyle();
  }


  // 样式变更
  change(event) {
    const typeEnum = ['font', 'color', 'width', 'size', 'bgcolor'];
    const type = event.target.name;
    const value = event.target.value;

    let index = typeEnum.findIndex(it => it === type);

    if (index !== -1) {
      // debugger;
      this.styleValue[typeEnum[index]] = value;

      // 设置cookie
      this.messageService.setCookie(typeEnum[index], value);
    }
    this.setStyle();
    console.log(this.style);
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

  ngOnInit() {
  }
}
