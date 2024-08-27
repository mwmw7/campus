import { ComponentFixture, TestBed } from '@angular/core/testing';
// @ts-ignore
import { ExhibitionmainPage } from './exhibitionmain.page';

describe('ExhibitionmainPage', () => {
  let component: ExhibitionmainPage;
  let fixture: ComponentFixture<ExhibitionmainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionmainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
