import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoinModalPage } from './join-modal.page';

describe('JoinModalPage', () => {
  let component: JoinModalPage;
  let fixture: ComponentFixture<JoinModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
