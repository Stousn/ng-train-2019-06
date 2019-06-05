import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() values: number[] = [];

  //values = [100, 200, 280, 50, 25, 75];

  constructor() {
    setInterval(() => this.values[5]++, 250);
  }

  ngOnInit() {
  }

}
