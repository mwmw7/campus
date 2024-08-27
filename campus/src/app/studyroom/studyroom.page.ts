import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studyroom',
  templateUrl: './studyroom.page.html',
  styleUrls: ['./studyroom.page.scss'],
})
export class StudyroomPage implements OnInit {
  public appPages = [
    { title: '홈', url: '/studyroom/page/home', icon: 'home' },
    { title: '강의', url: '/studyroom/page/room', icon: 'paper-plane' },
    { title: '프로젝트', url: '/studyroom/page/project', icon: 'heart' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
