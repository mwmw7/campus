import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExhibitionDetailsPage } from './exhibition-details.page';

describe('ExhibitionDetailsPage', () => {
  let component: ExhibitionDetailsPage;
  let fixture: ComponentFixture<ExhibitionDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
