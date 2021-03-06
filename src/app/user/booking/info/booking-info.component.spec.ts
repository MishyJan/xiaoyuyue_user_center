import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { BookingInfoComponent } from './booking-info.component';

describe('BookingInfoComponent', () => {
  let component: BookingInfoComponent;
  let fixture: ComponentFixture<BookingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookingInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
