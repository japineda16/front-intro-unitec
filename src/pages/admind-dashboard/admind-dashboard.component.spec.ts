import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindDashboardComponent } from './admind-dashboard.component';

describe('AdmindDashboardComponent', () => {
  let component: AdmindDashboardComponent;
  let fixture: ComponentFixture<AdmindDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
