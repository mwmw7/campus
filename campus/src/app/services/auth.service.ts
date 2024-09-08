import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    // 초기 로그인 상태 설정
    this.checkInitialLoginStatus();
  }

  private checkInitialLoginStatus() {
    // 로컬 스토리지에 토큰이 있으면 로그인 상태를 true로 설정
    console.log('true');
    this.loggedIn.next(!!localStorage.getItem('token'));
  }

  login_current(token: string) {
    console.log('토큰 저장 및 로그인 상태 업데이트:', token);  // 디버깅용 로그
    localStorage.setItem('token', token);
    this.loggedIn.next(true);  // 로그인 상태를 true로 변경
  }


  logout_current() {
    alert('false');
    // 로컬 스토리지에서 토큰을 제거하고 로그인 상태를 false로 설정
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  // 사용자 등록 메서드
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // 사용자 로그인 메서드
  login(credentials: any): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/auth/login`, credentials)
      .pipe(
        tap(response => {
          console.log('로그인 응답:', response);
          this.login_current(response.token); // 토큰 저장 및 상태 업데이트
        })
      );
  }


}
