import { Component, OnInit, forwardRef } from '@angular/core';
import { D3AreaComponent, TimeDataSet } from '../../components';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives : [ forwardRef(() => D3AreaComponent) ]
})
export class DashboardComponent implements OnInit {

  config : Array<TimeDataSet> = [];
  constructor() {
    let chart = new TimeDataSet();
    chart.dataset = [];
    chart.settings = {
      fill : 'orange',
      interpolation : 'true'
    };
    chart.dataset.push({x: new Date("2016-01-01"), y:2});
    chart.dataset.push({x: new Date("2016-02-01"), y:4});
    chart.dataset.push({x: new Date("2016-03-01"), y:5});
    chart.dataset.push({x: new Date("2016-04-01"), y:10});
    chart.dataset.push({x: new Date("2016-05-01"), y:5});
    chart.dataset.push({x: new Date("2016-06-01"), y:3});
    chart.dataset.push({x: new Date("2016-07-01"), y:1});

    this.config.push(chart);

    let chart2 = new TimeDataSet();
    chart2.dataset = [];
    chart2.settings = {
      fill : 'blue',
      interpolation : 'true'
    };
    chart2.dataset.push({x: new Date("2016-01-01"), y:3});
    chart2.dataset.push({x: new Date("2016-02-01"), y:6});
    chart2.dataset.push({x: new Date("2016-03-01"), y:2});
    chart2.dataset.push({x: new Date("2016-04-01"), y:3});
    chart2.dataset.push({x: new Date("2016-05-01"), y:4});
    chart2.dataset.push({x: new Date("2016-06-01"), y:2});
    chart2.dataset.push({x: new Date("2016-07-01"), y:1});

    this.config.push(chart2);
  }

  ngOnInit() {
  }

}
