import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPegawaiComponent } from './dashboard-pegawai.component';

describe('DashboardPegawaiComponent', () => {
  let component: DashboardPegawaiComponent;
  let fixture: ComponentFixture<DashboardPegawaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPegawaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPegawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
