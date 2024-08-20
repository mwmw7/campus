import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SidemenuComponent } from './sidemenucomponent/sidemenu.component';
import {TopBarComponent} from "./top-bar/top-bar.component"; // 사이드 메뉴 컴포넌트

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'top-bar', component: TopBarComponent
  },
  {
    path: 'sidemenu', component: SidemenuComponent
  },
  {
    path: 'studyroommain',
    loadChildren: () => import('./studyroommain/studyroommain.module').then( m => m.StudyroommainPageModule)
  },
  {
    path: 'exhibitionmain',
    loadChildren: () => import('./exhibitionmain/exhibitionmain.module').then( m => m.ExhibitionmainPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./firstpage/firstpage.module').then( m => m.FirstpagePageModule)
  },
  {
    path: 'secondpage',
    loadChildren: () => import('./secondpage/secondpage.module').then( m => m.SecondpagePageModule)
  },
  {
    path: 'thirdpage',
    loadChildren: () => import('./thirdpage/thirdpage.module').then( m => m.ThirdpagePageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
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
