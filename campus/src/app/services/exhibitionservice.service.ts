
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {
  private exhibitionData: any;

  constructor() { }

  setExhibitionData(data: any) {
    this.exhibitionData = data;
  }

  getExhibitionData() {
    return this.exhibitionData;
  }

  clearExhibitionData() {
    this.exhibitionData = null;
  }
}

export class ExhibitionserviceService {
}
