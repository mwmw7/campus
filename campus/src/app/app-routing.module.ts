import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SidemenuComponent } from './sidemenucomponent/sidemenu.component';
import {TopBarComponent} from "./top-bar/top-bar.component";



// @ts-ignore
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
    path: 'main',
    loadChildren: () => import('./firstpage/firstpage.module').then( m => m.FirstpagePageModule)
  },
  {
    path: 'exhibitionmain',
    loadChildren: () => import('./exhibitionmain/exhibitionmain.module').then(m => m.ExhibitionmainPageModule)
  },
  {
    path: 'thirdpage',
    loadChildren: () => import('./thirdpage/thirdpage.module').then( m => m.ThirdpagePageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'joinpage',
    loadChildren: () => import('./joinpage/joinpage.module').then( m => m.JoinpagePageModule)
  },
  {
    path: 'exhibition-details',
    loadChildren: () => import('./exhibition-details/exhibition-details.module').then( m => m.ExhibitionDetailsPageModule)
  },
  {
    path: 'exhibition-details/:id', loadChildren: () => import('./exhibition-details/exhibition-details.module').then(m => m.ExhibitionDetailsPageModule)
  },
// 사이드 메뉴 경로
  {
    path: 'studyroom',
    loadChildren: () => import('./studyroom/studyroom.module').then( m => m.StudyroomPageModule)
  },
  {
    path: 'page',
    loadChildren: () => import('./page/page.module').then( m => m.PagePageModule)
  },  {
    path: 'exhibitioncreate',
    loadChildren: () => import('./exhibitioncreate/exhibitioncreate.module').then( m => m.ExhibitioncreatePageModule)
  },
  {
    path: 'classsignup',
    loadChildren: () => import('./classsignup/classsignup.module').then( m => m.ClasssignupPageModule)
  },
  {
    path: 'classmy',
    loadChildren: () => import('./classmy/classmy.module').then( m => m.ClassmyPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
