import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-attendance-modal',
  templateUrl: './attendance-modal.component.html',
  styleUrls: ['./attendance-modal.component.scss'],
})
export class AttendanceModalComponent implements OnInit, OnDestroy {
  remainingTime: number = 120; // 2분 (120초)
  timer: any;
  currentDate: string | undefined;
  currentDate2: string | undefined;
  private intervalId: any;

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
    this.updateTime();
    this.startCountdown();

    // 1분마다 시간을 업데이트
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 60000); // 60,000 ms = 1분
  }

  startCountdown() {
    this.timer = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        clearInterval(this.timer);
        // 시간 종료 시 필요한 처리 (예: 모달 닫기)
        this.closeModal();
      }
    }, 1000); // 1초마다 감소
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    clearInterval(this.intervalId); // intervalId도 정리
  }

  get formattedTime() {
    const minutes = Math.floor(this.remainingTime / 60);
    const seconds = this.remainingTime % 60;
    return `${minutes}분 ${seconds}초`;
  }

  private updateTime() {
    const now = new Date();
    this.currentDate = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일 ${now.getHours()}시 ${now.getMinutes()}분`;
    this.currentDate2 = `${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`;
  }
}
