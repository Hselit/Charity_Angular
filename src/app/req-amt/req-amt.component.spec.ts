import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqAmtComponent } from './req-amt.component';

describe('ReqAmtComponent', () => {
  let component: ReqAmtComponent;
  let fixture: ComponentFixture<ReqAmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqAmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqAmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
