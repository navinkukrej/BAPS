import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreScheduleComponent } from './pre-schedule.component';

describe('PreScheduleComponent', () => {
  let component: PreScheduleComponent;
  let fixture: ComponentFixture<PreScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreScheduleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PreScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
