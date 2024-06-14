import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinPage } from './fin.page';

describe('FinPage', () => {
  let component: FinPage;
  let fixture: ComponentFixture<FinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
