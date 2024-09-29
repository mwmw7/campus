import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassnonePage } from './classnone.page';

describe('ClassnonePage', () => {
  let component: ClassnonePage;
  let fixture: ComponentFixture<ClassnonePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassnonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
