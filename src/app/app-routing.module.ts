import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from "./index/index.component";


const routes: Routes = [
  //一个url对应一个组件
  { path: '', component: IndexComponent },
  // 默认路由
  // { path: '', redirectTo: '/index', pathMatch: 'full' }
];
// 所有的路由信息,在app.module会被引入 

@NgModule({
  // 初始化所有的路由信息
  imports: [RouterModule.forRoot(routes)],
  // 导出路由模块,然后就可以在组件中使用路由指令了
  exports: [RouterModule]
})
export class AppRoutingModule { }
