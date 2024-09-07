import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';  // 로그인 서비스
import {AlertController, ModalController} from '@ionic/angular';
import {JoinModalComponent} from "../join-modal/join-modal.component";
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  loginForm!: FormGroup;
  userRole: string | undefined;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        // 로그인 요청
        const response = await firstValueFrom(this.authService.login(this.loginForm.value));

        // 서버 응답을 로그로 출력하여 확인
        console.log('응답 데이터:', response);

        // JWT 토큰을 로컬 스토리지에 저장 (response.token 대신 response에서 올바른 토큰 경로 확인)
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          console.log('토큰:', response.token);

          // 로그인 상태 업데이트
          this.authService.login_current(response.token);

          // 성공 알림
          await this.showAlert('로그인 성공', '로그인이 성공적으로 완료되었습니다.');
          console.log("Success alert shown");

          // 메인 페이지로 이동
          this.router.navigate(['main']);
        } else {
          throw new Error('토큰이 응답에 없습니다.');
        }
      } catch (error) {
        console.error('로그인 오류:', error);
        // 실패 알림
        await this.showAlert('로그인 실패', '아이디 또는 비밀번호가 틀렸습니다.');
      }
    } else {
      // 폼 입력 오류 알림
      await this.showAlert('입력 오류', '아이디와 비밀번호를 모두 입력하세요.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  setUserRole(role: string) {
    this.userRole = role;
    this.navigateToJoinPage();
  }

  async navigateToJoinPage() {
    await this.modalController.dismiss(); // 모달 닫기
    // joinpage로 네비게이션하면서 선택된 역할을 전달
    await this.router.navigate(['/joinpage'], { state: { user_role: this.userRole } });
    console.log("user_role을 받았습니다.");
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: JoinModalComponent,
      cssClass: "modal"
    });

    return await modal.present();
  }
}
