import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HkstableComponent } from './hkstable.component';

describe('HkstableComponent', () => {
  let component: HkstableComponent;
  let fixture: ComponentFixture<HkstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HkstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HkstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
