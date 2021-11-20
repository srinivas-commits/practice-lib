import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KstableComponent } from './kstable.component';

describe('KstableComponent', () => {
  let component: KstableComponent;
  let fixture: ComponentFixture<KstableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KstableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
