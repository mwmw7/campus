import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';  // 생성한 서비스 임포트

@Component({
  selector: 'app-joinpage',
  templateUrl: './joinpage.page.html',
  styleUrls: ['./joinpage.page.scss'],
})
export class JoinpagePage implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private authService: AuthService  // 서비스 주입
  ) {
    this.registerForm = this.fb.group({
      user_name: ['', Validators.required],
      nick_name: ['', Validators.required],
      user_role: ['', Validators.required],
      id: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      generation: ['', Validators.required]
    });
  }

  ngOnInit() {}

  // passwordMatchValidator(form: FormGroup) {
  //   return form.get('password')!.value === form.get('confirmPassword')!.value
  //     ? null : { mismatch: true };
  // }

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
