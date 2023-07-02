import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VregComponent } from './vreg.component';

describe('VregComponent', () => {
  let component: VregComponent;
  let fixture: ComponentFixture<VregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
