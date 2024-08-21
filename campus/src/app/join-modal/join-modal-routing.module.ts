import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinModalPage } from './join-modal.page';

const routes: Routes = [
  {
    path: '',
    component: JoinModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinModalPageRoutingModule {}
