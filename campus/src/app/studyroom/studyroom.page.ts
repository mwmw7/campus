import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AttendanceModalComponent } from '../attendance-modal/attendance-modal.component';

@Component({
  selector: 'app-studyroom',
  templateUrl: './studyroom.page.html',
  styleUrls: ['./studyroom.page.scss'],
})
export class StudyroomPage implements OnInit, OnDestroy {
  currentDate: string | undefined;
  currentDate2: string | undefined;
  private intervalId: any;

  constructor(private modalController: ModalController) {
    this.updateTime();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AttendanceModalComponent,
      cssClass: "modal2"
    });
    return await modal.present();
  }

  ngOnInit() {
    // 1분마다 시간을 업데이트
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 60000); // 60,000 ms = 1분
  }

  ngOnDestroy() {
    // 컴포넌트가 파괴될 때 interval을 정리
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateTime() {
    const now = new Date();
    this.currentDate = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분`;
    this.currentDate2 = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
  }


}
