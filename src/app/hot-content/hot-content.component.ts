import { Component, OnInit, Input } from '@angular/core';

/**
 * 热度
 */
@Component({
  selector: 'app-hot-content',
  templateUrl: './hot-content.component.html',
  styleUrls: ['./hot-content.component.css']
})
export class HotContentComponent implements OnInit {

  @Input() hotList: any;

  @Input() style: any;

  constructor() {
  }

  ngOnInit() {
  }
}
