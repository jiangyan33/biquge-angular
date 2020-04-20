import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {
  recommendList: any;

  constructor() {
  }

  ngOnInit() {
    this.recommendList = [{ categoryName: '武侠', name: '剑魔独孤求败', author: '令狐庸', id: '1' }]
  }

}
