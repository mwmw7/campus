import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoinpagePage } from './joinpage.page';

describe('JoinpagePage', () => {
  let component: JoinpagePage;
  let fixture: ComponentFixture<JoinpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
