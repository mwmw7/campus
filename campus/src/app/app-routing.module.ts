import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SidemenuComponent } from './component/sidemenucomponent/sidemenu.component';
import {TopBarComponent} from "./component/top-bar/top-bar.component";



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
    loadChildren: () => import('./mainpage/firstpage/firstpage.module').then(m => m.FirstpagePageModule)
  },
  {
    path: 'exhibitionmain',
    loadChildren: () => import('./exhibitionpage/exhibitionmain/exhibitionmain.module').then(m => m.ExhibitionmainPageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./mainpage/loginpage/loginpage.module').then(m => m.LoginpagePageModule)
  },
  {
    path: 'joinpage',
    loadChildren: () => import('./mainpage/joinpage/joinpage.module').then(m => m.JoinpagePageModule)
  },
  {
    path: 'exhibition-details',
    loadChildren: () => import('./exhibitionpage/exhibition-details/exhibition-details.module').then(m => m.ExhibitionDetailsPageModule)
  },
  {
    path: 'exhibition-details/:id', loadChildren: () => import('./exhibitionpage/exhibition-details/exhibition-details.module').then(m => m.ExhibitionDetailsPageModule)
  },
// 사이드 메뉴 경로
  {
    path: 'studyroom',
    loadChildren: () => import('./studyroompage/studyroom/studyroom.module').then(m => m.StudyroomPageModule)
  },
  {
    path: 'page',
    loadChildren: () => import('./page/page.module').then( m => m.PagePageModule)
  },
  {
    path: 'exhibitioncreate',
    loadChildren: () => import('./exhibitionpage/exhibitioncreate/exhibitioncreate.module').then(m => m.ExhibitioncreatePageModule)
  },
  {
    path: 'classsignup',
    loadChildren: () => import('./studyroompage/classsignup/classsignup.module').then(m => m.ClasssignupPageModule)
  },
  {
    path: 'classmy',
    loadChildren: () => import('./studyroompage/classmy/classmy.module').then(m => m.ClassmyPageModule)
  },
  {
    path: 'classnone',
    loadChildren: () => import('./studyroompage/classnone/classnone.module').then(m => m.ClassnonePageModule)
  },
  {
    path: 'projectsearch',
    loadChildren: () => import('./studyroompage/projectsearch/projectsearch.module').then(m => m.ProjectsearchPageModule)
  },
  {
    path: 'projectmy',
    loadChildren: () => import('./studyroompage/projectmy/projectmy.module').then(m => m.ProjectmyPageModule)
  },
  {
    path: 'introduce-metaverse',
    loadChildren: () => import('./mainpage/introduce-metaverse/introduce-metaverse.module').then(m => m.IntroduceMetaversePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
