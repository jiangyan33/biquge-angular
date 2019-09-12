import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {
  // index,categoryInfo,content,novelInfo
  @Input() selected;
  firendLink: any;
  newBook;
  novelInfo;
  constructor(private messageService: MessageService) {
  }

  ngOnChanges(changes: SimpleChanges) {

    let selected = changes['selected'].currentValue;

    if (selected === 'index') {
      this.firendLink = this.messageService.get('firendLink');
    } else if (selected === 'novelInfo') {
      this.newBook = this.messageService.get('newBook');
      this.novelInfo = this.messageService.get('novelInfo');
    } else {

    }
  }
  ngOnInit() {

  }
}
