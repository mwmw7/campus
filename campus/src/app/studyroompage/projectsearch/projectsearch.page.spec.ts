import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsearchPage } from './projectsearch.page';

describe('ProjectsearchPage', () => {
  let component: ProjectsearchPage;
  let fixture: ComponentFixture<ProjectsearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
