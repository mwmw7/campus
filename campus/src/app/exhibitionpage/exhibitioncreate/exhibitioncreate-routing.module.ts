import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExhibitioncreatePage } from './exhibitioncreate.page';

const routes: Routes = [
  {
    path: '',
    component: ExhibitioncreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExhibitioncreatePageRoutingModule {}
