import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsearchPage } from './projectsearch.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsearchPageRoutingModule {}
