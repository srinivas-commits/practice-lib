import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHostalComponent } from './add-hostal.component';

describe('AddHostalComponent', () => {
  let component: AddHostalComponent;
  let fixture: ComponentFixture<AddHostalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHostalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHostalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
