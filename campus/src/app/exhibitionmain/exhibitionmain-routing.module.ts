import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// @ts-ignore
import { ExhibitionmainPage } from './exhibitionmain.page';

const routes: Routes = [
  {
    path: '',
    component: ExhibitionmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExhibitionmainPageRoutingModule {}
