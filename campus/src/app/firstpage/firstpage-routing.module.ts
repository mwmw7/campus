import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstpagePage } from './firstpage.page';

const routes: Routes = [
  {
    path: '',
    component: FirstpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstpagePageRoutingModule {}
