import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasssignupPage } from './classsignup.page';

describe('ClasssignupPage', () => {
  let component: ClasssignupPage;
  let fixture: ComponentFixture<ClasssignupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasssignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
