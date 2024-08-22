import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { NgForOf } from "@angular/common";
import { ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

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
  userRole: string | undefined;

  public TopPages = [
    { title: '전시관', url: '/secondpage' },
    { title: '학습룸', url: '/thirdpage' },
  ];

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private router: Router
  ) { }

    //로그인 상태
  ngOnInit() {
    this.authService.isLoggedIn.subscribe(status => {
      console.log('로그인 상태:', status);
      this.isLoggedIn = status;
    });
  }


  //로그아웃
  logout() {
    this.authService.logout_current();
  }


  //모달 유저 전달
  setUserRole(role: string) {
    this.userRole = role;
    this.navigateToJoinPage();
  }


  //모달에서 joinpage로 이동
  async navigateToJoinPage() {
    await this.modalController.dismiss(); // 모달 닫기
    // joinpage로 네비게이션하면서 선택된 역할을 전달
    await this.router.navigate(['/joinpage'], { state: { user_role: this.userRole } });
    console.log("user_role을 받았습니다.");
  }
}
