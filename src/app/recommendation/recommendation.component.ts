import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  template: `
      <div class="r">
      <h2>强势推荐</h2>
      <ul>
          <li *ngFor="let item of recommendList">
              <span class="s1">[{{item.categoryName}}]</span>
              <span class="s2"><a routerLink="/novel_info.html?id={{item.id}}">{{item.name}}</a></span>
              <span class="s5">{{item.author}}</span>
          </li>
      </ul>
    </div>
    <div class="clear"></div>
  `,
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  recommendList: any;

  constructor() {
    this.recommendList = [{ categoryName: '武侠', name: '剑魔独孤求败', author: '令狐庸', id: '1' }]
  }

  ngOnInit() {
  }

}
