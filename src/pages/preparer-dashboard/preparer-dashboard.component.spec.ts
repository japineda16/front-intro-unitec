import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparerDashboardComponent } from './preparer-dashboard.component';

describe('PreparerDashboardComponent', () => {
  let component: PreparerDashboardComponent;
  let fixture: ComponentFixture<PreparerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
