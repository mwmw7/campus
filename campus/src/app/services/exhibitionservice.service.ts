import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {
  private exhibitionData: any = {};

  constructor() {}

  // 데이터를 저장하는 메서드
  saveExhibitionData(data: any) {
    this.exhibitionData = data;
    console.log('Exhibition data saved:', this.exhibitionData);
  }

  // 데이터를 가져오는 메서드 (필요시)
  getExhibitionData() {
    return this.exhibitionData;
  }
}

export class ExhibitionserviceService {
}
