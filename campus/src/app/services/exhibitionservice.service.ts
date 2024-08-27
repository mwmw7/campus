import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

// 전시회 메인페이지 정보 가져오기
  getsecondpage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/main`);
  }

  // 전시회 세부페이지 정보 가져오기
  getExhibitionDetail(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/details/${id}`);
  }
}
