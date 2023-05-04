import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VgrRequestComponent } from './vgr-request.component';

describe('VgrRequestComponent', () => {
  let component: VgrRequestComponent;
  let fixture: ComponentFixture<VgrRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VgrRequestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VgrRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
