import { Component, Inject, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ScreenService } from '../../../services/screen.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  ledValue = 0;
  sprinkler_A_1_w1 = 0;
  sprinkler_A_1_m1 = 0;
  sprinkler_A_1_w2 = 0;
  sprinkler_A_1_m2 = 0;
  warininglight_A_1_m2 = 0;
  warininglight_A_1_m1 = 0;
  warininglight_A_1_w2 = 0;
  warininglight_A_1_w1 = 0;
  infrared_A_1_m2 = 0;
  infrared_A_1_m1 = 0;
  window_A_1_m = 0;
  window_A_1_w = 0;
  fan_A_1_m = 0;
  fan_A_1_w = 0;

  tem_A_1_m = 0;
  hum_A_1_m = 0;
  NH3_A_1_m = 0;
  H2S_A_1_m = 0;
  smoke_A_1_m = 0;

  today: any = new Date();
  timer: any;

  constructor(private screenService: ScreenService) { }



  ngOnInit(): void {
    this.current();
    timer(0, 2000).subscribe(
      () => {
        this.screenService.getStatus('led_101').subscribe(
          (resp: any) => {
            // console.log(resp);
            this.ledValue = resp.data.value;
          }
        );
        this.screenService.getInfos().subscribe(
          (resp: any) => {
            console.log(resp.data.data);
            for (let i of resp.data.data) {
              if (i.DeviceName == 'sprinkler_A_1_w1') {
                this.sprinkler_A_1_w1 = i.value;
              }
              if (i.DeviceName == 'sprinkler_A_1_m1') {
                this.sprinkler_A_1_m1 = i.value;
              }
              if (i.DeviceName == 'sprinkler_A_1_w2') {
                this.sprinkler_A_1_w2 = i.value;
              }
              if (i.DeviceName == 'sprinkler_A_1_m2') {
                this.sprinkler_A_1_m2 = i.value;
              }
              if (i.DeviceName == 'warininglight_A_1_m2') {
                this.warininglight_A_1_m2 = i.value;
              }
              if (i.DeviceName == 'warininglight_A_1_m1') {
                this.warininglight_A_1_m1 = i.value;
                console.log(this.warininglight_A_1_m1);
              }
              if (i.DeviceName == 'warininglight_A_1_w2') {
                this.warininglight_A_1_w2 = i.value;
              }
              if (i.DeviceName == 'warininglight_A_1_w1') {
                this.warininglight_A_1_w1 = i.value;
              }
              if (i.DeviceName == 'infrared_A_1_m2') {
                this.infrared_A_1_m2 = i.value;
              }
              if (i.DeviceName == 'infrared_A_1_m1') {
                this.infrared_A_1_m1 = i.value;
              }
              if (i.DeviceName == 'window_A_1_m') {
                this.window_A_1_m = i.value;
              }
              if (i.DeviceName == 'window_A_1_w') {
                this.window_A_1_w = i.value;
              }
              if (i.DeviceName == 'fan_A_1_m') {
                this.fan_A_1_m = i.value;
              }
              if (i.DeviceName == 'fan_A_1_w') {
                this.fan_A_1_w = i.value;
              }
              if (i.DeviceName == 'tem_A_1_m') {
                this.tem_A_1_m = i.value;
              }
              if (i.DeviceName == 'hum_A_1_m') {
                this.hum_A_1_m = i.value;
              }
              if (i.DeviceName == 'NH3_A_1_m') {
                this.NH3_A_1_m = i.value;
              }
              if (i.DeviceName == 'H2S_A_1_m') {
                this.H2S_A_1_m = i.value;
              }
              if (i.DeviceName == 'smoke_A_1_m') {
                this.smoke_A_1_m = i.value;
              }
            };

          }
        );
      }
    );
  }

  /* test(){
    this.screenService.getInfos().subscribe(
      (resp: any) => {
        console.log(resp);
      }
    );
  } */

  turnOn(id) {
    this.screenService.turnOn(id).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          this.ledValue = resp.data.value;
        }
      }
    );
  }
  turnOff(id) {
    this.screenService.turnOff(id).subscribe(
      (resp: any) => {
        console.log(resp);
        if (resp.success) {
          this.ledValue = resp.data.value;
        }
      }
    );
  }

  // 动态显示当前时间
  current() {
    var d = new Date(),
      str = '';
    str += d.getFullYear() + '年';
    str += d.getMonth() + 1 + '月';
    str += d.getDate() + '日';
    str += d.getHours() + ':';
    str += d.getMinutes() + ':';
    str += d.getSeconds();
    document.getElementById("time").innerHTML = str;
    setInterval(this.current, 1000);
  }

}
