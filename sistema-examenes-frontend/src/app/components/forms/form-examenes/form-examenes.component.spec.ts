import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExamenesComponent } from './form-examenes.component';

describe('FormExamenesComponent', () => {
  let component: FormExamenesComponent;
  let fixture: ComponentFixture<FormExamenesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormExamenesComponent]
    });
    fixture = TestBed.createComponent(FormExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
