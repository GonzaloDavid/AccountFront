import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultLoadFileComponent } from './result-load-file.component';

describe('ResultLoadFileComponent', () => {
  let component: ResultLoadFileComponent;
  let fixture: ComponentFixture<ResultLoadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultLoadFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultLoadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
