import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTurmasComponent } from './view-turmas.component';

describe('ViewTurmasComponent', () => {
  let component: ViewTurmasComponent;
  let fixture: ComponentFixture<ViewTurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTurmasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
