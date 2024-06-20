import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeemailPage } from './changeemail.page';

describe('ChangeemailPage', () => {
  let component: ChangeemailPage;
  let fixture: ComponentFixture<ChangeemailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeemailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
