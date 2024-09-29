import { Component } from '@angular/core';
import { ExhibitionService } from "../../services/exhibitionservice.service";

@Component({
  selector: 'app-exhibitioncreate',
  templateUrl: './exhibitioncreate.page.html',
  styleUrls: ['./exhibitioncreate.page.scss'],
})
export class ExhibitioncreatePage {
  projectName: string = '';
  teamName: string = '';
  course: string = '';
  thumbnail: File | null = null;
  thumbnailPreview: string | null = null; // 미리보기 URL
  introduce: string = '';
  introductions: string[] = []; // Introduce 문장을 저장할 배열
  memberName: string = '';
  memberImage: File | null = null;
  members: { name: string, image: string }[] = []; // Member를 저장할 배열
  outputImagesList: string[] = []; // Output 이미지 URL을 저장할 배열
  outputImages: FileList | null = null;
  outputVideo: File | null = null;
  outputVideoPreview: string | null = null; // 영상 미리보기 URL

  constructor(private exhibitionService: ExhibitionService) {}

  addIntroduce() {
    if (this.introduce) {
      this.introductions.push(this.introduce);
      this.introduce = ''; // 입력 필드 초기화
    }
  }

  removeIntroduce(index: number) {
    this.introductions.splice(index, 1); // 해당 인덱스의 문장 삭제
  }

  addMember() {
    if (this.memberName && this.memberImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.members.push({ name: this.memberName, image: e.target?.result as string });
        this.memberName = ''; // 입력 필드 초기화
        this.memberImage = null; // 이미지 초기화
      };
      reader.readAsDataURL(this.memberImage); // 이미지 미리보기 로드
    }
  }

  removeMember(index: number) {
    this.members.splice(index, 1); // 해당 인덱스의 멤버 삭제
  }

  addOutputImage() {
    if (this.outputImages) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.outputImagesList.push(e.target?.result as string);
      };
      reader.readAsDataURL(this.outputImages[0]); // 첫 번째 파일만 추가
      this.outputImages = null; // 입력 필드 초기화
    }
  }

  removeOutputImage(index: number) {
    this.outputImagesList.splice(index, 1); // 해당 인덱스의 출력 이미지 삭제
  }

  onOutputImageChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.outputImages = target.files; // 여러 파일을 선택할 수 있도록
    }
  }

  onMemberImageChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.memberImage = target.files[0]; // memberImage 파일 설정
    }
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.thumbnail = target.files[0]; // thumbnail 파일 설정
      const reader = new FileReader();
      reader.onload = (e) => {
        this.thumbnailPreview = e.target?.result as string; // 미리보기 URL 설정
      };
      reader.readAsDataURL(this.thumbnail); // 이미지 미리보기 로드
    }
  }

  onOutputVideoChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.outputVideo = target.files[0]; // outputVideo 파일 설정
      const reader = new FileReader();
      reader.onload = (e) => {
        this.outputVideoPreview = e.target?.result as string; // 미리보기 URL 설정
      };
      reader.readAsDataURL(this.outputVideo); // 영상 미리보기 로드
    }
  }

  onSubmit() {
    // 유효성 검사
    if (this.introductions.length < 1 || this.introductions.length > 5) {
      alert('Introduce 문장은 1~5개 사이여야 합니다.');
      return;
    }

    if (this.members.length < 1 || this.members.length > 7) {
      alert('Member는 1~7명이어야 합니다.');
      return;
    }

    if (this.outputImagesList.length < 1 || this.outputImagesList.length > 3) {
      alert('Output에서 사용할 사진은 1~3개이어야 합니다.');
      return;
    }

    // FormData 객체 생성
    const formData = new FormData();

    // 폼 데이터 추가
    formData.append('projectName', this.projectName);
    formData.append('teamName', this.teamName);
    formData.append('course', this.course);

    if (this.thumbnail) {
      formData.append('thumbnail', this.thumbnail); // 썸네일 파일 추가
    }

    formData.append('introductions', JSON.stringify(this.introductions)); // Introduce 문장 배열 추가

    this.members.forEach(member => {
      formData.append('members[]', JSON.stringify(member)); // 각 멤버 추가
    });

    this.outputImagesList.forEach(image => {
      formData.append('outputImages[]', image); // 출력 이미지 추가
    });

    if (this.outputVideo) {
      formData.append('outputVideo', this.outputVideo); // 비디오 파일 추가
    }

    // 데이터 전송
    this.exhibitionService.saveExhibitionData(formData).subscribe(
      response => {
        console.log('전송 성공:', response);
        // 성공 시 추가 동작 (예: 성공 알림)
      },
      error => {
        console.error('전송 실패:', error);
        // 실패 시 추가 동작 (예: 실패 알림)
      }
    );
  }

}
