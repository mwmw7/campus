import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';  // 로그인 서비스
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
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
        const response = await this.authService.login(this.loginForm.value).toPromise();
        localStorage.setItem('token', response.token); // JWT 저장
        await this.showAlert('로그인 성공', '로그인이 성공적으로 완료되었습니다.');
        this.router.navigate(['main']);
      } catch (error) {
        await this.showAlert('로그인 실패', '아이디 또는 비밀번호가 틀렸습니다.');
      }
    } else {
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
}
