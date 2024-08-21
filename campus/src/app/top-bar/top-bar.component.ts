import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";
import { ModalController } from '@ionic/angular';
import { JoinModalPage } from '../join-modal/join-modal.page';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  imports: [
    IonicModule,
    RouterLink,
    NgForOf,
    RouterLinkActive
  ],
  standalone: true
})
export class TopBarComponent {
  public TopPages = [
    { title: '전시관', url: '/secondpage' },
    { title: '학습룸', url: '/thirdpage' },
  ];

  constructor(private modalController: ModalController) {

  }

  ngOnInit() {}

  async openModal() {
    const modal = await this.modalController.create({
      component: JoinModalPage,
      cssClass: 'custom-modal'
    });
    return await modal.present();
  }
}
