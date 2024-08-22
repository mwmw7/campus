import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joinpage',
  templateUrl: './joinpage.page.html',
  styleUrls: ['./joinpage.page.scss'],
})
export class JoinpagePage implements OnInit {
  registerForm!: FormGroup;
  userRole: string | null = null; // 모달에서 전달된 사용자 역할을 저장할 변수

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router,
    private modalController: ModalController
  ) {
    // 회원가입 폼 초기화
    this.registerForm = this.fb.group({
      user_name: ['', Validators.required],
      nick_name: ['', Validators.required],
      user_role: ['', Validators.required], // 사용자 역할 필드
      id: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      generation: ['', Validators.required]
    });
  }

  ngOnInit() {
    // 라우터에서 전달된 user_role 값을 설정
    this.userRole = history.state.user_role;
    if (this.userRole) {
      this.registerForm.patchValue({ user_role: this.userRole });
    }
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const data = this.registerForm.value;

      try {
        const response = await this.authService.register(data).toPromise();
        console.log('회원가입 성공:', response);

        const alert = await this.alertController.create({
          header: 'Success',
          message: '회원가입이 성공했습니다',
          buttons: ['OK'],
        });
        await alert.present();
        this.registerForm.reset();
        this.router.navigate(['/main']); // 회원가입 후 메인 페이지로 이동
      } catch (error) {
        console.error('회원가입 실패:', error);

        const alert = await this.alertController.create({
          header: 'Error',
          message: '회원가입 실패: ',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }

  logout() {
    // 로그아웃 로직
    console.log('로그아웃되었습니다.');
  }
}
