import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagePage } from './page.page';

describe('PagePage', () => {
  let component: PagePage;
  let fixture: ComponentFixture<PagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
