import { Component } from '@angular/core';
import { ExhibitionService } from '../../services/exhibitionservice.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-exhibition-create',
  templateUrl: './exhibition.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./exhibition.component.scss']
})
export class ExhibitionComponent {
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

    this.exhibitionService.saveExhibitionData(formData);
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
