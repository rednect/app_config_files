import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasFormsComponent } from './turmas-forms.component';

describe('TurmasFormsComponent', () => {
  let component: TurmasFormsComponent;
  let fixture: ComponentFixture<TurmasFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmasFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurmasFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
