import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondpagePage } from './secondpage.page';

const routes: Routes = [
  {
    path: '',
    component: SecondpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondpagePageRoutingModule {}
