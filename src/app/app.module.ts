import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { CategoryHotComponent } from './category-hot/category-hot.component';
import { CategoryInfoComponent } from './category-info/category-info.component';
import { CategoryRecentComponent } from './category-recent/category-recent.component';
import { HotContentComponent } from './hot-content/hot-content.component';
import { RecentComponent } from './recent/recent.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { FooterComponent } from './footer/footer.component';
import { NovelInfoComponent } from './novel-info/novel-info.component';
import { ContentComponent } from './content/content.component';
import { CookieService } from 'ngx-cookie-service';
import { QuestionComponent } from './question/question.component';
import { SearchComponent } from './search/search.component';
import { LayoutComponent } from './layout/layout.component';
import { TopbarComponent } from './topbar/topbar.component';

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
    FooterComponent,
    NovelInfoComponent,
    ContentComponent,
    QuestionComponent,
    SearchComponent,
    LayoutComponent,
    TopbarComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule,
    // http模块
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
