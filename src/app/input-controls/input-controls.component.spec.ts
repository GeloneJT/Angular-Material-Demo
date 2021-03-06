import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputControlsComponent } from './input-controls.component';

describe('InputControlsComponent', () => {
  let component: InputControlsComponent;
  let fixture: ComponentFixture<InputControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
