import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DontComponent } from './dont.component';

describe('DontComponent', () => {
  let component: DontComponent;
  let fixture: ComponentFixture<DontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
