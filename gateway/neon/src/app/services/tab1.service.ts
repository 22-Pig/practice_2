import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Info } from '../tab1/Info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {

  infos$: Observable<Info>;
  SERVER_URL = 'http://127.0.0.1:8080/';
  currentUser: Info;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

    // 该函数用于获取灯的状态
    getINFOS() {
      return this.httpClient.get(this.SERVER_URL + 'infos');
    }
    getMOT() {
      // console.log("getMOT执行");
      return this.httpClient.get(this.SERVER_URL + 'getMot');
    }
    turnOn(id: string) {
      const obj = {
        id: id,
        status: 1
      };
      return this.httpClient.post(this.SERVER_URL + 'toggle', obj, this.httpOptions);
    }
    turnOff(id: string) {
      const obj = {
        id: id,
        status: 0
      };
      return this.httpClient.post(this.SERVER_URL + 'toggle', obj, this.httpOptions);
    }
}
