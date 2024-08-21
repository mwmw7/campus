import {Component, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";
import { ModalController } from '@ionic/angular';
import { JoinModalPage } from '../join-modal/join-modal.page';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common'; // CommonModule 임포트


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
              private authService: AuthService) {

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

  async openModal() {
    const modal = await this.modalController.create({
      component: JoinModalPage,
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }
}
