import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostalsComponent } from './hostals.component';

describe('HostalsComponent', () => {
  let component: HostalsComponent;
  let fixture: ComponentFixture<HostalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
