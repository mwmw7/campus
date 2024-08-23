import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyroommainPage } from './studyroommain.page';

describe('StudyroommainPage', () => {
  let component: StudyroommainPage;
  let fixture: ComponentFixture<StudyroommainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyroommainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
