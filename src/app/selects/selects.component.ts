import { Component } from '@angular/core';

interface Marker {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.css']
})
export class SelectsComponent {
  markers: Marker[] = [
    {value: 'present', viewValue: 'Presente'},
    {value: 'missed', viewValue: 'Faltou'},
  ];
}
