import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorFormsComponent } from './professor-forms.component';

describe('ProfessorFormsComponent', () => {
  let component: ProfessorFormsComponent;
  let fixture: ComponentFixture<ProfessorFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
