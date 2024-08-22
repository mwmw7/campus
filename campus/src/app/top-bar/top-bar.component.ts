import {Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms"; // CommonModule 임포트

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  imports: [
    IonicModule,
    RouterLink,
    NgForOf,
    RouterLinkActive,
    CommonModule,
    ReactiveFormsModule,
  ],
  standalone: true
})
export class TopBarComponent implements OnInit {
  isLoggedIn = false;

  public TopPages = [
    { title: '전시관', url: '/secondpage' },
    { title: '학습룸', url: '/thirdpage' },
  ];

  constructor(private modalController: ModalController,
              private authService: AuthService,
              private router: Router,
              ) {

  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(status => {
      console.log('로그인 상태:', status);
      this.isLoggedIn = status;
    });
  }

  logout() {
    this.authService.logout_current();
  }

  async selectRole(role: string) {
    // 모달을 닫고, user_role을 Joinpage로 전달
    await this.modalController.dismiss();
    await this.router.navigate(['/joinpage'], {state: {user_role: role}});
  }

}
