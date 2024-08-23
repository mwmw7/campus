import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studyroommain',
  templateUrl: './studyroommain.page.html',
  styleUrls: ['./studyroommain.page.scss'],
})
export class StudyroommainPage implements OnInit {
  public appPages = [
    { title: 'Inbox', url: '/lecture', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
