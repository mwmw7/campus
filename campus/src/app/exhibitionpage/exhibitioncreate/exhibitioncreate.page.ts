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
  introduce: string = '';
  introductions: string[] = []; // Introduce 문장을 저장할 배열
  memberName: string = '';
  memberImage: File | null = null;
  members: { name: string, image: string }[] = []; // Member를 저장할 배열
  outputImages: FileList | null = null;
  outputVideo: File | null = null;

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

  onMemberImageChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.memberImage = target.files[0]; // memberImage 파일 설정
    }
  }

  onSubmit() {
    const formData = {
      projectName: this.projectName,
      teamName: this.teamName,
      course: this.course,
      thumbnail: this.thumbnail,
      introductions: this.introductions,
      members: this.members,
      outputImages: this.outputImages,
      outputVideo: this.outputVideo ? this.outputVideo : null
    };

    this.exhibitionService.saveExhibitionData(formData).subscribe(
      response => {
        console.log('전송 성공:', response);
        // 성공 시 추가 동작
      },
      error => {
        console.error('전송 실패:', error);
        // 실패 시 추가 동작
      }
    );
  }

  onOutputImagesChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.outputImages = input.files;
    } else {
      this.outputImages = null;
    }
  }

  onOutputVideoChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.outputVideo = input.files[0];
    } else {
      this.outputVideo = null;
    }
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.thumbnail = target.files[0]; // thumbnail 파일 설정
    }
  }
}
