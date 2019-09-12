import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  // index,categoryInfo,content,novelInfo
  @Input() page;
  friendLink: any;
  newBook;
  novelInfo;
  constructor(private messageService: MessageService) {
  }

  ngOnChanges(changes: SimpleChanges) {

    let page = changes['page'].currentValue;

    if (page === 'index') {
      this.friendLink = this.messageService.get('friendLink');
    } else {
      this.newBook = this.messageService.get('newBook');
      this.novelInfo = this.messageService.get('novelInfo');
    }
  }
  ngOnInit() {

  }
}
