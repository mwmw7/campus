import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExhibitionDetailsPage } from './exhibition-details.page';

const routes: Routes = [
  {
    path: '',
    component: ExhibitionDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExhibitionDetailsPageRoutingModule {}
