import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // service buat manggil API

  // function employe 

  postEmploye(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getEmploye(data: any) {
    return this.http.get<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getData() {
    return this.http.get("http://localhost:3000/posts")
      .pipe(map((res) => {
        return res;
      }))
  }

  updateEmploye(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/posts/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteEmploye(id: number) {
    return this.http.delete<any>("http://localhost:3000/posts/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  // function perusahaan 
  postPerusahaan(data: any) {
    return this.http.post<any>("http://localhost:3000/perusahaan", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getPerusahaan(data: any) {
    return this.http.get<any>("http://localhost:3000/perusahaan", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getDataPerusahaaan() {
    return this.http.get("http://localhost:3000/perusahaan")
      .pipe(map((res) => {
        return res;
      }))
  }

  updatePerusahaan(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/perusahaan/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deletePerusahaan(id: number) {
    return this.http.delete<any>("http://localhost:3000/perusahaan/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  //function mobil 
  postMobil(data: any) {
    return this.http.post<any>("http://localhost:3000/mobil", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getMobil(data: any) {
    return this.http.get<any>("http://localhost:3000/mobil", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  getDataMobil() {
    return this.http.get("http://localhost:3000/mobil")
      .pipe(map((res) => {
        return res;
      }))
  }

  updateMobil(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/mobil/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  deleteMobil(id: number) {
    return this.http.delete<any>("http://localhost:3000/mobil/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}




