import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HotContentComponent } from './hot-content/hot-content.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    HotContentComponent,
    RecommendationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
