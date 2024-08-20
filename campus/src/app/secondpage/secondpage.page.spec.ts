import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SecondpagePage } from './secondpage.page';

describe('SecondpagePage', () => {
  let component: SecondpagePage;
  let fixture: ComponentFixture<SecondpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
