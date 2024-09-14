import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassmyPage } from './classmy.page';

describe('ClassmyPage', () => {
  let component: ClassmyPage;
  let fixture: ComponentFixture<ClassmyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassmyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
