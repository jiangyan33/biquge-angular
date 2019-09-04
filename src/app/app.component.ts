import { Component } from '@angular/core';
import { IndexService } from './index.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  categoryList;

  constructor(private indexService: IndexService) {
    this.categoryList = this.indexService.getCategoryList();
  }
}
