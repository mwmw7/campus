import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-joinpage',
  templateUrl: './joinpage.page.html',
  styleUrls: ['./joinpage.page.scss'],
})
export class JoinpagePage implements OnInit {
  registerForm!: FormGroup;
  userRole: string | undefined;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    // 모달에서 전달된 user_role 값 설정
    this.userRole = this.router.getCurrentNavigation()?.extras.state?.['user_role'];

    // 폼 초기화
    this.registerForm = this.fb.group({
      user_name: ['', Validators.required],
      nick_name: ['', Validators.required],
      user_role: [this.userRole || '', Validators.required], // 전달된 값 또는 빈 문자열로 초기화
      id: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      generation: ['', Validators.required]
    });
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

        // 회원가입 후 폼 초기화
        this.registerForm.reset();

        // 회원가입 성공 후 페이지 이동 (로그인 페이지나 메인 페이지로)
        await this.router.navigate(['/loginpage']); // 예시로 로그인 페이지로 이동
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
}
