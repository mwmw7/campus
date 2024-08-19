import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  imports: [
    IonicModule,
    RouterLink,
    NgForOf,
    RouterLinkActive
  ],
  standalone: true
})
export class SidemenuComponent {
  public appPages = [
    { title: '홈', url: '/folder/inbox', icon: 'mail' },
    { title: '강의', url: '/folder/outbox', icon: 'paper-plane' },
    { title: '프로젝트', url: '/folder/favorites', icon: 'heart' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  ngOnInit() {}
}




