import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor(private message: MessageService) {
  }

  ngOnInit() {
  }

  getMessage(name: string) {
    return this.message.get(name);
  }


}
