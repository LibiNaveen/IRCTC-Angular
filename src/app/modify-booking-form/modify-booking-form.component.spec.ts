import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBookingFormComponent } from './modify-booking-form.component';

describe('ModifyBookingFormComponent', () => {
  let component: ModifyBookingFormComponent;
  let fixture: ComponentFixture<ModifyBookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyBookingFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
