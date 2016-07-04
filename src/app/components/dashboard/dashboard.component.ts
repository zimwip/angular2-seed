import { Component, OnInit, forwardRef } from '@angular/core';
import { D3AreaComponent } from '../../components';
import { AreaChartConfig } from '../../model';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives : [ forwardRef(() => D3AreaComponent) ]
})
export class DashboardComponent implements OnInit {

  config : Array<AreaChartConfig> = [];
  constructor() {
    let chart = new AreaChartConfig();
    chart.dataset = [];
    chart.settings = {
      fill : 'blue',
      interpolation : 'true'
    };
    chart.dataset.push({x:1, y:2});
    chart.dataset.push({x:2, y:4});
    chart.dataset.push({x:3, y:5});
    this.config.push(chart);
  }

  ngOnInit() {
  }

}
