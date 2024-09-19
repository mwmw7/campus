import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstpagePage } from './firstpage.page';

describe('FirstpagePage', () => {
  let component: FirstpagePage;
  let fixture: ComponentFixture<FirstpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
