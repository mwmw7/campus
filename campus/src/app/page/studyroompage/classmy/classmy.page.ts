import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classmy',
  templateUrl: './classmy.page.html',
  styleUrls: ['./classmy.page.scss'],
})
export class ClassmyPage implements OnInit {
  activeSection: string = 'lecture'; // 기본적으로 강의 목록을 활성화

  constructor() { }

  ngOnInit() {
    // 초기화 로직이 필요하다면 여기에 작성
  }

  setActiveSection(section: string) {
    this.activeSection = section; // 클릭한 섹션으로 활성화 변경
  }
}
