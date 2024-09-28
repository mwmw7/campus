import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { firstValueFrom } from 'rxjs'; // firstValueFrom 임포트

@Component({
  selector: 'app-classmy',
  templateUrl: './classmy.page.html',
  styleUrls: ['./classmy.page.scss'],
})
export class ClassmyPage implements OnInit {
  activeSection: string = 'lecture'; // 기본적으로 강의 목록을 활성화
  newCourseTitle: string = ''; // 새 강의 제목을 저장하는 변수
  courses: string[] = []; // 생성된 강의 목록을 저장하는 배열

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // 초기화 로직이 필요하다면 여기에 작성
  }

  setActiveSection(section: string) {
    this.activeSection = section; // 클릭한 섹션으로 활성화 변경
  }

  async confirmCourse() {
    if (this.newCourseTitle) {
      try {
        // 강의 생성 요청
        const courseData = { course_title: this.newCourseTitle }; // 필드 이름에 맞추어 객체 생성
        const response = await firstValueFrom(this.authService.createCourse(courseData)); // 수정된 부분
        // 서버 응답 처리
        console.log(response);

        // 강의 목록에 추가
        this.courses.push(this.newCourseTitle);
        this.newCourseTitle = ''; // 입력 필드 초기화
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

}
