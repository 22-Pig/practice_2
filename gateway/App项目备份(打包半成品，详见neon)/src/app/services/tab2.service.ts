import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Tab2Service {

  SERVER_URL = 'http://127.0.0.1:8080/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  getLED() {
    // console.log("getMOT执行");
    return this.httpClient.get(this.SERVER_URL + 'getLed');
  }
}
