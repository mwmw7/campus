import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectmyPage } from './projectmy.page';

describe('ProjectmyPage', () => {
  let component: ProjectmyPage;
  let fixture: ComponentFixture<ProjectmyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
