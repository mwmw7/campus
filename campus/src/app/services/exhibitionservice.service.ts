import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {
  private apiUrl = 'YOUR_API_URL'; // 실제 API URL로 변경

  constructor(private http: HttpClient) {}

  saveExhibitionData(formData: any): Observable<any> {
    const form = new FormData();

    // formData의 각 필드를 FormData에 추가
    form.append('projectName', formData.projectName);
    form.append('teamName', formData.teamName);
    form.append('course', formData.course);
    if (formData.thumbnail) {
      form.append('thumbnail', formData.thumbnail);
    }
    form.append('introduce', JSON.stringify(formData.introduce)); // 문자열로 변환

    formData.members.forEach((member: { name: string; image: File }) => {
      form.append('members[]', JSON.stringify({ name: member.name }));
      if (member.image) {
        form.append('memberImage', member.image);
      }
    });

    if (formData.outputImages) {
      const files = formData.outputImages as File[]; // 타입 단언
      files.forEach((file) => {
        form.append('outputImages[]', file);
      });
    }



    if (formData.outputVideo) {
      form.append('outputVideo', formData.outputVideo);
    }

    // HTTP POST 요청
    return this.http.post(this.apiUrl, form);
  }
}
