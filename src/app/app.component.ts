import { Component } from '@angular/core';
import { IndexService } from './index.service';
import { MessageService } from './message.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 当从主页进入详情时将一些数据写入到messageService中
  categoryList;
  searchContent;// 搜索内容
  constructor(private indexService: IndexService, private messageService: MessageService, private formBuilder: FormBuilder, private router: Router) {
    this.indexService.getCategoryList().subscribe(result => this.categoryList = result);

    this.searchContent = this.formBuilder.group({ value: undefined });
  }

  getMessage(name) {
    return this.messageService.get(name);
  }

  onSubmit() {
    let value = this.searchContent.value.value;
    if (value) {
      this.router.navigate(['/search_info'], { queryParams: { value } });
    }
  }
}