import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegvolComponent } from './regvol.component';

describe('RegvolComponent', () => {
  let component: RegvolComponent;
  let fixture: ComponentFixture<RegvolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegvolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
