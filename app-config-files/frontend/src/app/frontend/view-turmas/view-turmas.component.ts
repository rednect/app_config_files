import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';


@Component({
  selector: 'app-view-turmas',
  templateUrl: './view-turmas.component.html',
  styleUrls: ['./view-turmas.component.scss']
})
export class ViewTurmasComponent {

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  
  
}


