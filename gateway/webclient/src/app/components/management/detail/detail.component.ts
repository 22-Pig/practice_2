import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { Observable, timer } from 'rxjs';
import { DetailService } from '../../../services/detail.service';

import { HttpClient } from '@angular/common/http';
import { Alipt } from './Alipt';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  isLoading = false;
  baseUrl = 'http://127.0.0.1:8080/';

  led$ = null;
  door$ = null;
  sprinkler$ = null;
  fan$ = null;
  window$ = null;
  mot$ = null;

  chartOptionTemp_101: any;
  updateOptionTemp_101: any;
  chartOptionTemp_001: any;
  updateOptionTemp_001: any;

  chartOptionHumd_101: any;
  updateOptionHumd_101: any;
  chartOptionHumd_001: any;
  updateOptionHumd_001: any;

  chartOptionSmoke_101: any;
  updateOptionSmoke_101: any;
  chartOptionSmoke_001: any;
  updateOptionSmoke_001: any;

  chartOptionNH3_101: any;
  updateOptionNH3_101: any;
  chartOptionNH3_001: any;
  updateOptionNH3_001: any;

  chartOptionH2S_101: any;
  updateOptionH2S_101: any;
  chartOptionH2S_001: any;
  updateOptionH2S_001: any;

  public xAxisTemp_101 = [];
  public xAxisHumd_101 = [];
  public xAxisSmoke_101 = [];
  public xAxisNH3_101 = [];
  public xAxisH2S_101 = [];
  public xAxisTemp_001 = [];
  public xAxisHumd_001 = [];
  public xAxisSmoke_001 = [];
  public xAxisNH3_001 = [];
  public xAxisH2S_001 = [];


  public temps_101 = [];
  public humds_101 = [];
  public smokes_101 = [];
  public NH3_101 = [];
  public H2S_101 = [];

  public temps_001 = [];
  public humds_001 = [];
  public smokes_001 = [];
  public NH3_001 = [];
  public H2S_001 = [];

  constructor(private detailService: DetailService, private httpclient: HttpClient) {
    this.chartOptionTemp_101 = {
      title: {
        text: 'Temp_101温度跟踪图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['温度']
      },
      toolbox: {
        feature: {
          saveAsImage: {
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundarGap: false,
          data: [],
          name: 'time'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '温度',
          type: 'line',
          stack: '度',
          // areaStyle: { normal: {} },
          data: [],
          color: ['#FF6347'],
          smooth: true
        }
      ]
    };
    this.chartOptionTemp_001 = {
      title: {
        text: 'Temp_001温度跟踪图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['温度']
      },
      toolbox: {
        feature: {
          saveAsImage: {
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundarGap: false,
          data: [],
          name: 'time'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '温度',
          type: 'line',
          stack: '度',
          // areaStyle: { normal: {} },
          data: [],
          color: ['#FF6347'],
          smooth: true
        }
      ]
    };

    this.updateOptionTemp_101 = {};
    this.updateOptionTemp_001 = {};

    this.chartOptionHumd_101 = {
      title: {
        text: 'Humd_101湿度跟踪图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['湿度']
      },
      toolbox: {
        feature: {
          saveAsImage: {
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundarGap: false,
          data: [],
          name: 'time'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '湿度',
          type: 'line',
          stack: '%',
          // areaStyle: { normal: {} },
          data: [],
          color: ['#1E90FF'],
          smooth: true
        }
      ]
    };
    this.chartOptionHumd_001 = {
      title: {
        text: 'Humd_001湿度跟踪图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['湿度']
      },
      toolbox: {
        feature: {
          saveAsImage: {
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundarGap: false,
          data: [],
          name: 'time'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '湿度',
          type: 'line',
          stack: '%',
          // areaStyle: { normal: {} },
          data: [],
          color: ['#1E90FF'],
          smooth: true
        }
      ]
    };
    this.updateOptionHumd_101 = {};
    this.updateOptionHumd_001 = {};

    this.chartOptionSmoke_101 = {
      title: {
        text: 'Smoke_101烟雾跟踪图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['烟雾']
      },
      toolbox: {
        feature: {
          saveAsImage: {
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundarGap: false,
          data: [],
          name: 'time'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '烟雾',
          type: 'line',
          stack: '毫克',
          data: [],
          color: ['#BEBEBE'],
          smooth: true
        }
      ]
    };
    this.chartOptionSmoke_001 = {
      title: {
        text: 'Smoke_001烟雾跟踪图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['烟雾']
      },
      toolbox: {
        feature: {
          saveAsImage: {
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundarGap: false,
          data: [],
          name: 'time'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '烟雾',
          type: 'line',
          stack: '毫克',
          data: [],
          color: ['#BEBEBE'],
          smooth: true
        }
      ]
    };

    this.updateOptionSmoke_101 = {};
    this.updateOptionSmoke_001 = {};

    this.chartOptionNH3_101 = {
      title: {
        text: 'NH3_101跟踪图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['浓度']
      },
      toolbox: {
        feature: {
          saveAsImage: {
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundarGap: false,
          data: [],
          name: 'time'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '浓度',
          type: 'line',
          stack: '%',
          // areaStyle: { normal: {} },
          data: [],
          color: ['#CFB53B'],
          smooth: true
        }
      ]
    };
    this.chartOptionNH3_001 = {
      title: {
        text: 'NH3_101跟踪图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['浓度']
      },
      toolbox: {
        feature: {
          saveAsImage: {
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundarGap: false,
          data: [],
          name: 'time'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '浓度',
          type: 'line',
          stack: '%',
          // areaStyle: { normal: {} },
          data: [],
          color: ['#CFB53B'],
          smooth: true
        }
      ]
    };
    this.updateOptionNH3_101 = {};
    this.updateOptionNH3_001 = {};

    this.chartOptionH2S_101 = {
      title: {
        text: 'H2S_101跟踪图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['浓度']
      },
      toolbox: {
        feature: {
          saveAsImage: {
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundarGap: false,
          data: [],
          name: 'time'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '浓度',
          type: 'line',
          stack: '%',
          // areaStyle: { normal: {} },
          data: [],
          color: ['#8E2323'],
          smooth: true
        }
      ]
    };
    this.chartOptionH2S_001 = {
      title: {
        text: 'H2S_001跟踪图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['浓度']
      },
      toolbox: {
        feature: {
          saveAsImage: {
          }
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundarGap: false,
          data: [],
          name: 'time'
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '浓度',
          type: 'line',
          stack: '%',
          // areaStyle: { normal: {} },
          data: [],
          color: ['#8E2323'],
          smooth: true
        }
      ]
    };
    this.updateOptionH2S_101 = {};
    this.updateOptionH2S_001 = {};

  }

  ngOnInit(): void {
    // this.led$ = this.detailService.getLED();
    // this.fan$ = this.detailService.getFAN();
    // this.window$ = this.detailService.getWINDOW();
    // this.door$ = this.detailService.getDOOR();
    // this.sprinkler$ = this.detailService.getSPRINKLER();

    timer(2000, 2000).subscribe(
      () => {
        this.httpclient.get('http://127.0.0.1:8080/temp/Temp_001', {}).subscribe(
          (value: any) => {
            // console.log(value);
            if (value) {
              let i = value.length - 1;
              for (let item of value) {
                const d = new Date(Number(item.time));
                // console.log(d);
                this.xAxisTemp_001[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                this.xAxisTemp_001[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                this.xAxisTemp_001[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                // console.log(item.temp);
                this.temps_001[i] = (item.temp);
                i--;
              }
              this.updateOptionTemp_001 = {
                xAxis: [
                  {
                    data: this.xAxisTemp_001
                  }
                ],
                series: [
                  {
                    data: this.temps_001
                  }
                ]
              }
            }
          }
        ),
          this.httpclient.get('http://127.0.0.1:8080/temp/Temp_101', {}).subscribe(
            (value: any) => {
              // console.log(value);
              if (value) {
                let i = value.length - 1;
                for (let item of value) {
                  const d = new Date(Number(item.time));
                  // console.log(d);
                  this.xAxisTemp_101[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                  this.xAxisTemp_101[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                  this.xAxisTemp_101[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                  // console.log(item.temp);
                  this.temps_101[i] = (item.temp);
                  i--;
                }
                this.updateOptionTemp_101 = {
                  xAxis: [
                    {
                      data: this.xAxisTemp_101
                    }
                  ],
                  series: [
                    {
                      data: this.temps_101
                    }
                  ]
                }
              }
            }
          ),
          this.httpclient.get('http://127.0.0.1:8080/humd/Humd_001', {}).subscribe(
            (value: any) => {
              // console.log(value);
              if (value) {
                let i = value.length - 1;
                for (let item of value) {
                  const d = new Date(Number(item.time));
                  this.xAxisHumd_001[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                  this.xAxisHumd_001[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                  this.xAxisHumd_001[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                  this.humds_001[i] = (item.humd);
                  i--;
                }
                this.updateOptionHumd_001 = {
                  xAxis: [
                    {
                      data: this.xAxisHumd_001
                    }
                  ],
                  series: [
                    {
                      data: this.humds_001
                    }
                  ]
                }
              }
            }
          ),
          this.httpclient.get('http://127.0.0.1:8080/humd/Humd_101', {}).subscribe(
            (value: any) => {
              // console.log(value);
              if (value) {
                let i = value.length - 1;
                for (let item of value) {
                  const d = new Date(Number(item.time));
                  this.xAxisHumd_101[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                  this.xAxisHumd_101[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                  this.xAxisHumd_101[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                  this.humds_101[i] = (item.humd);
                  i--;
                }
                this.updateOptionHumd_101 = {
                  xAxis: [
                    {
                      data: this.xAxisHumd_101
                    }
                  ],
                  series: [
                    {
                      data: this.humds_101
                    }
                  ]
                }
              }
            }
          ),
          this.httpclient.get('http://127.0.0.1:8080/smoke/Smoke_001', {}).subscribe(
            (value: any) => {
              if (value) {
                let i = value.length - 1;
                for (let item of value) {
                  const d = new Date(Number(item.time));
                  this.xAxisSmoke_001[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                  this.xAxisSmoke_001[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                  this.xAxisSmoke_001[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                  this.smokes_001[i] = (item.smoke);
                  i--;
                }
                this.updateOptionSmoke_001 = {
                  xAxis: [
                    {
                      data: this.xAxisSmoke_001
                    }
                  ],
                  series: [
                    {
                      data: this.smokes_001
                    }
                  ]
                }
              }
            }
          ),
          this.httpclient.get('http://127.0.0.1:8080/smoke/Smoke_101', {}).subscribe(
            (value: any) => {
              if (value) {
                let i = value.length - 1;
                for (let item of value) {
                  const d = new Date(Number(item.time));
                  this.xAxisSmoke_101[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                  this.xAxisSmoke_101[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                  this.xAxisSmoke_101[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                  this.smokes_101[i] = (item.smoke);
                  i--;
                }
                this.updateOptionSmoke_101 = {
                  xAxis: [
                    {
                      data: this.xAxisSmoke_101
                    }
                  ],
                  series: [
                    {
                      data: this.smokes_101
                    }
                  ]
                }
              }
            }
          ),
          this.httpclient.get('http://127.0.0.1:8080/NH3/NH3_001', {}).subscribe(
            (value: any) => {
              // console.log(value);
              if (value) {
                let i = value.length - 1;
                for (let item of value) {
                  const d = new Date(Number(item.time));
                  // console.log(d);
                  this.xAxisNH3_001[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                  this.xAxisNH3_001[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                  this.xAxisNH3_001[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                  // console.log(item.temp);
                  this.NH3_001[i] = (item.nh3);
                  i--;
                }
                this.updateOptionNH3_001 = {
                  xAxis: [
                    {
                      data: this.xAxisNH3_001
                    }
                  ],
                  series: [
                    {
                      data: this.NH3_001
                    }
                  ]
                }
              }
            }
          ),
          this.httpclient.get('http://127.0.0.1:8080/NH3/NH3_101', {}).subscribe(
            (value: any) => {
              // console.log(value);
              if (value) {
                let i = value.length - 1;
                for (let item of value) {
                  const d = new Date(Number(item.time));
                  // console.log(d);
                  this.xAxisNH3_101[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                  this.xAxisNH3_101[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                  this.xAxisNH3_101[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                  // console.log(item.temp);
                  this.NH3_101[i] = (item.nh3);
                  i--;
                }
                this.updateOptionNH3_101 = {
                  xAxis: [
                    {
                      data: this.xAxisNH3_101
                    }
                  ],
                  series: [
                    {
                      data: this.NH3_101
                    }
                  ]
                }
              }
            }
          ),
          this.httpclient.get('http://127.0.0.1:8080/H2S/H2S_001', {}).subscribe(
            (value: any) => {
              // console.log(value);
              if (value) {
                let i = value.length - 1;
                for (let item of value) {
                  const d = new Date(Number(item.time));
                  this.xAxisH2S_001[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                  this.xAxisH2S_001[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                  this.xAxisH2S_001[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                  this.H2S_001[i] = (item.h2s);
                  i--;
                }
                this.updateOptionH2S_001 = {
                  xAxis: [
                    {
                      data: this.xAxisH2S_001
                    }
                  ],
                  series: [
                    {
                      data: this.H2S_001
                    }
                  ]
                }
              }
            }
          ),
          this.httpclient.get('http://127.0.0.1:8080/H2S/H2S_101', {}).subscribe(
            (value: any) => {
              // console.log(value);
              if (value) {
                let i = value.length - 1;
                for (let item of value) {
                  const d = new Date(Number(item.time));
                  this.xAxisH2S_101[i] = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
                  this.xAxisH2S_101[i] += ":" + (d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes());
                  this.xAxisH2S_101[i] += ":" + (d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds());
                  this.H2S_101[i] = (item.h2s);
                  i--;
                }
                this.updateOptionH2S_101 = {
                  xAxis: [
                    {
                      data: this.xAxisH2S_101
                    }
                  ],
                  series: [
                    {
                      data: this.H2S_101
                    }
                  ]
                }
              }
            }
          )
      }
    );
  }

}
