import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  public page!: string;
  private activatedRoute = inject(ActivatedRoute);

  constructor() {}

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.updatePageContent(this.page);
  }

  updatePageContent(pageId: string) {
    switch (pageId) {
      case 'home':
        // 홈 페이지에 해당하는 내용을 추가
        this.page = '홈';
        break;
      case 'room':
        // 강의 페이지에 해당하는 내용을 추가
        this.page = '강의';
        break;
      case 'project':
        // 프로젝트 페이지에 해당하는 내용을 추가
        this.page = '프로젝트';
        break;
      default:
        this.page = '페이지 없음';
    }
  }
}
