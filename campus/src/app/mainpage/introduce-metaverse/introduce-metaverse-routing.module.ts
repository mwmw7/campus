import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroduceMetaversePage } from './introduce-metaverse.page';

const routes: Routes = [
  {
    path: '',
    component: IntroduceMetaversePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroduceMetaversePageRoutingModule {}
