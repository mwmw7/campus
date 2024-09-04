import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studyroom',
  templateUrl: './studyroom.page.html',
  styleUrls: ['./studyroom.page.scss'],
})
export class StudyroomPage implements OnInit {
  currentDate: string;

  constructor() {
    const now = new Date();
    this.currentDate = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분`;
  }


  ngOnInit() {
  }

}
