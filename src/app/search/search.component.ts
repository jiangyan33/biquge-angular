import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexService } from '../index.service';
import { MessageService } from '../message.service';

// 搜索内容
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  bookList;
  value;

  constructor(private route: ActivatedRoute, private indexService: IndexService, private messageService: MessageService) {
    this.route.queryParamMap.subscribe(params => {
      this.value = params.get('value');
      this.indexService.search(this.value).subscribe(result => {
        this.bookList = result;
        // 修改页尾
        this.messageService.set('page', 'index');
      });
    });
  }

  ngOnInit() {

  }

}
