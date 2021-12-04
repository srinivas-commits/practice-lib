import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueHostalComponent } from './issue-hostal.component';

describe('IssueHostalComponent', () => {
  let component: IssueHostalComponent;
  let fixture: ComponentFixture<IssueHostalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueHostalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueHostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
