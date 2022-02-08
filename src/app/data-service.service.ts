import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataServiceService {
  private url = 'https://oniiexpressapi.herokuapp.com';
  private url2 = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  getJugadoresApi() {
    const urlget = `${this.url}/jugadores/get`;
    return this.http.get(urlget);
  }
}
