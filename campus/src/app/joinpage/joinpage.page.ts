import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-joinpage',
  templateUrl: './joinpage.page.html',
  styleUrls: ['./joinpage.page.scss'],
})
export class JoinpagePage implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      nickname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value
      ? null : { mismatch: true };
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const data = this.registerForm.value;

      try {
        console.log('회원가입 데이터:', data);

        const alert = await this.alertController.create({
          header: 'Success',
          message: '회원가입이 성공했습니다',
          buttons: ['OK'],
        });
        await alert.present();
        this.registerForm.reset();
      } catch (error) {
        const alert = await this.alertController.create({
          header: 'Error',
          message: '회원가입 실패',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }
}
