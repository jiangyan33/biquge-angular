import { Component } from '@angular/core';
import { IndexService } from './index.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categoryList;
  firendLink;

  constructor(private indexService: IndexService) {
    this.indexService.getCategoryList().subscribe(result => this.categoryList = result);

    this.firendLink = [{ url: "https://angular.cn", name: "angular官网" }];
  }
  ngOnInit() {
  }
}
