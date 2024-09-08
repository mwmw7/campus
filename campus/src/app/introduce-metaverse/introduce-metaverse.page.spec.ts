import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroduceMetaversePage } from './introduce-metaverse.page';

describe('IntroduceMetaversePage', () => {
  let component: IntroduceMetaversePage;
  let fixture: ComponentFixture<IntroduceMetaversePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceMetaversePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
