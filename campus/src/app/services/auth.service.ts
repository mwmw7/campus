import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/users'; // 기본 URL 설정

  constructor(private http: HttpClient) { }

  // 사용자 등록 메서드
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData); // 등록 URL
  }

  // 사용자 로그인 메서드
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials, { withCredentials: true }); // 로그인 URL
  }
}
