import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  // index,categoryInfo,content,novelInfo
  @Input() page: any;
  friendLink: any;
  newBook: any;
  novelInfo: any;
  constructor(private message: MessageService) {
  }

  ngOnChanges(changes: SimpleChanges) {

    const page = changes.page.currentValue;

    if (page === 'index') {
      this.friendLink = this.message.get('friendLink');
    } else {
      this.newBook = this.message.get('newBook');
      this.novelInfo = this.message.get('novelInfo');
    }
  }
  ngOnInit() {

  }
}
