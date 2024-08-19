import { Component } from '@angular/core';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent {
  public appPages = [
    { title: '홈', url: '/studyroommain', icon: 'mail' },
    { title: '강의', url: '/folder/outbox', icon: 'paper-plane' },
    { title: '프로젝트', url: '/folder/favorites', icon: 'heart' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
