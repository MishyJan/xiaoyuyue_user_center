import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AdminFooterComponent } from './footer.component';

describe('AdminFooterComponent', () => {
  let component: AdminFooterComponent;
  let fixture: ComponentFixture<AdminFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
