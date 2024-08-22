import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studyroom-side-bar',
  templateUrl: './studyroom-side-bar.component.html',
  styleUrls: ['./studyroom-side-bar.component.scss'],
})
export class StudyroomSideBarComponent  implements OnInit {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() { }

  ngOnInit() {}

}
