import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdpagePage } from './thirdpage.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdpagePageRoutingModule {}
