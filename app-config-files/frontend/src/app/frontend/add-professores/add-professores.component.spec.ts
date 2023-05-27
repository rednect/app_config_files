import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfessoresComponent } from './add-professores.component';

describe('AddProfessoresComponent', () => {
  let component: AddProfessoresComponent;
  let fixture: ComponentFixture<AddProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfessoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
