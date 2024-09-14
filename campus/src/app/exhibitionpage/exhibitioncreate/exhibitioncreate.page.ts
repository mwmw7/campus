import { Component } from '@angular/core';
import { ExhibitionService } from "../../services/exhibitionservice.service";

@Component({
  selector: 'app-exhibitioncreate',
  templateUrl: './exhibitioncreate.page.html',
  styleUrls: ['./exhibitioncreate.page.scss'],
})
export class ExhibitioncreatePage  {
  projectName: string = '';
  teamName: string = '';
  course: string = '';
  thumbnail: File | null = null;
  introduce: string = '';
  memberName: string = '';
  memberImage: File | null = null;
  outputImages: FileList | null = null;
  outputVideo: File | null = null;

  constructor(private exhibitionService: ExhibitionService) {}

  // ngOnInit 메소드 추가


  onSubmit() {
    const formData = {
      projectName: this.projectName,
      teamName: this.teamName,
      course: this.course,
      thumbnail: this.thumbnail,
      introduce: this.introduce.split('\n'),
      members: [{ name: this.memberName, image: this.memberImage }],
      outputImages: this.outputImages,
      outputVideo: this.outputVideo ? this.outputVideo : null // null 체크
    };

    this.exhibitionService.saveExhibitionData(formData).subscribe(
      response => {
        console.log('전송 성공:', response);
        // 성공 시 추가 동작 (예: 알림, 페이지 이동 등)
      },
      error => {
        console.error('전송 실패:', error);
        // 실패 시 추가 동작 (예: 오류 메시지 표시)
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

  onMemberImageChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      this.memberImage = target.files[0]; // memberImage 파일 설정
    }
  }
}
