import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IndexComponent } from './index/index.component';
import { CategoryInfoComponent } from './category-info/category-info.component';
import { NovelInfoComponent } from './novel-info/novel-info.component';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'book',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'categoryInfo/:categoryId',
        component: CategoryInfoComponent
      },
      {
        path: 'bookInfo/:bookId',
        component: NovelInfoComponent
      },
      {
        path: 'contentInfo/:chapterId',
        component: ContentComponent
      },
      {
        path: 'searchInfo/:value',
        component: SearchComponent
      }
    ]
  },
  // 默认路由
  { path: '', redirectTo: '/book', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// 所有的路由信息,在app.module会被引入

@NgModule({
  // 初始化所有的路由信息
  imports: [RouterModule.forRoot(routes)],
  // 导出路由模块,然后就可以在组件中使用路由指令了
  exports: [RouterModule]
})
export class AppRoutingModule { }
