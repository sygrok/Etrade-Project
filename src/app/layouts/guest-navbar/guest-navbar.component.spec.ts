import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestNavbarComponent } from './guest-navbar.component';

describe('GuestNavbarComponent', () => {
  let component: GuestNavbarComponent;
  let fixture: ComponentFixture<GuestNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
