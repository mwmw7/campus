import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SidemenuComponent } from './sidemenucomponent/sidemenu.component';
import {TopBarComponent} from "./top-bar/top-bar.component"; // 사이드 메뉴 컴포넌트

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'top-bar', component: TopBarComponent
  },
  // {
  //   path: 'sidemenu', component: SidemenuComponent
  // },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },  {
    path: 'studyroommain',
    loadChildren: () => import('./studyroommain/studyroommain.module').then( m => m.StudyroommainPageModule)
  },

// 사이드 메뉴 경로

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
