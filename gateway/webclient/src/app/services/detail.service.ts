import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  SERVER_URL = 'http://127.0.0.1:8080/';
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
  getLED() {
    return this.httpClient.get(this.SERVER_URL + 'getLed');
  }
  getFAN() {
    return this.httpClient.get(this.SERVER_URL + 'getFan');
  }
  getWINDOW() {
    return this.httpClient.get(this.SERVER_URL + 'getWindow');
  }
  getDOOR() {
    return this.httpClient.get(this.SERVER_URL + 'getDoor');
  }
  getSPRINKLER() {
    return this.httpClient.get(this.SERVER_URL + 'getSprinkler');
  }
}
