import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudyroomPage } from './studyroom.page';

describe('StudyroomPage', () => {
  let component: StudyroomPage;
  let fixture: ComponentFixture<StudyroomPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
