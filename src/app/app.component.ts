import { Component } from '@angular/core';
import { IndexService } from './index.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categoryList;

  constructor(private indexService: IndexService, private messageService: MessageService) {
    this.indexService.getCategoryList().subscribe(result => this.categoryList = result);
  }
  ngOnInit() {
  }
}
