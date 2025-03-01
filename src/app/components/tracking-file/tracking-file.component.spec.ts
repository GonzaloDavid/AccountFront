import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingFileComponent } from './tracking-file.component';

describe('TrackingFileComponent', () => {
  let component: TrackingFileComponent;
  let fixture: ComponentFixture<TrackingFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
