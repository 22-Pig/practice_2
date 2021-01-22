import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  SERVER_URL = 'http://127.0.0.1:8848/';
  constructor(private httpClient: HttpClient) { }

  getInfos(){
    return this.httpClient.get(this.SERVER_URL + 'getInfos');
  }

  getStatus(id: string) {
    const obj = {
      id: id,
    };
    return this.httpClient.post(this.SERVER_URL + 'getStatus', obj);
  }

  // 该函数用于开关
  turnOn(id: string) {
    const obj = {
      id: id,
      status: 1
    };
    return this.httpClient.post(this.SERVER_URL + 'toggle', obj);
  }
  turnOff(id: string) {
    const obj = {
      id: id,
      status: 0
    };
    return this.httpClient.post(this.SERVER_URL + 'toggle', obj);
  }

}
