import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {
  private apiUrl = 'http://localhost:3000/exhibitions'; // 실제 API URL로 변경하세요.

  constructor(private http: HttpClient) {}


  // Create: 전시물 생성
  saveExhibitionData(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    const url = this.apiUrl + '/register'
    console.log(url);
    return this.http.post(url, formData, { headers, withCredentials: true });
  }

  // Read: 전시물 목록 가져오기
  getExhibitions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Read: 특정 전시물 가져오기
  getExhibition(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Update: 전시물 수정
  updateExhibition(id: string, formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, formData);
  }

  // Delete: 전시물 삭제
  deleteExhibition(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

export class ExhibitionserviceService {
}
