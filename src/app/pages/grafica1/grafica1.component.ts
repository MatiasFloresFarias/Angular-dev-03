import { Component } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public labels2: string[] = ['Pisco', 'Refresco', 'Coca0'];
  public data1 = [
    [10, 15, 40],
  ];
  public data2 = [
    [100, 15, 40],
  ];
}
