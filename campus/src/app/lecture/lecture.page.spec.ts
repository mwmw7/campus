import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LecturePage } from './lecture.page';

describe('LecturePage', () => {
  let component: LecturePage;
  let fixture: ComponentFixture<LecturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
