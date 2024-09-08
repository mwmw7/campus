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
  showPassword = false; // 비밀번호 보기 상태를 나타내는 변수

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      Id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    const loginData = this.loginForm.value; // 폼에서 아이디와 비밀번호를 가져옵니다.
    try {
      console.log('로그인 진행중'); // 로그인 과정 시작 로그

      // AuthService의 login 메서드를 호출하고 서버로부터 JWT 토큰을 받아옵니다.
      const response = await firstValueFrom(this.authService.login(loginData)); // login 메서드를 사용
      console.log('서버 응답:', response); // 서버 응답 로그

      if (response && response.token) {
        // 로그인 성공 시, 받은 JWT 토큰을 로컬 스토리지에 저장합니다.
        localStorage.setItem('token', response.token);

        // AuthService의 login_current 메서드를 호출하여 로그인 상태를 업데이트합니다.
        this.authService.login_current(response.token);

        // 성공 알림을 사용자에게 표시합니다.
        await this.showAlert('로그인 성공', '로그인이 성공적으로 완료되었습니다.');

        // 메인 페이지로 이동합니다. (this.router.navigate를 주석 해제하면 됩니다.)
        this.router.navigate(['main']);
      } else {
        throw new Error('토큰이 없습니다.'); // 토큰이 없으면 예외를 발생시킵니다.
      }
    } catch (error) {
      // 로그인 실패 시, 오류를 콘솔에 기록하고, 실패 알림을 사용자에게 표시합니다.
      console.error('로그인 오류:', error);
      await this.showAlert('로그인 실패', '아이디 또는 비밀번호가 틀렸습니다.');
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

  // 비밀번호 보기 토글 메서드
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
