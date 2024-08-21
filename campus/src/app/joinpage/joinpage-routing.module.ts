import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinpagePage } from './joinpage.page';

const routes: Routes = [
  {
    path: '',
    component: JoinpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinpagePageRoutingModule {}
