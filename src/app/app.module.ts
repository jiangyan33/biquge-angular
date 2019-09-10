import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { CategoryHotComponent } from './category-hot/category-hot.component';
import { CategoryInfoComponent } from './category-info/category-info.component';
import { CategoryRecentComponent } from './category-recent/category-recent.component';
import { HotContentComponent } from './hot-content/hot-content.component';
import { RecentComponent } from './recent/recent.component';
import { RecommendationComponent } from './recommendation/recommendation.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CategoryHotComponent,
    CategoryInfoComponent,
    CategoryRecentComponent,
    HotContentComponent,
    RecentComponent,
    RecommendationComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //http模块
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
