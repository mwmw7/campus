import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThirdpagePage } from './thirdpage.page';

describe('ThirdpagePage', () => {
  let component: ThirdpagePage;
  let fixture: ComponentFixture<ThirdpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
