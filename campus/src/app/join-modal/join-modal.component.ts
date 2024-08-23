import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-join-modal',
  templateUrl: './join-modal.component.html',
  styleUrls: ['./join-modal.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
  ]
})
export class JoinModalComponent  implements OnInit {

  userRole: string | undefined;

  constructor(
    private router: Router,
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  //모달 유저 전달
  setUserRole(role: string) {
    this.userRole = role;
    this.navigateToJoinPage();
  }


  //모달에서 joinpage로 이동
  async navigateToJoinPage() {
    await this.modalController.dismiss(); // 모달 닫기
    // joinpage로 네비게이션하면서 선택된 역할을 전달
    await this.router.navigate(['/joinpage'], { state: { user_role: this.userRole } });
    console.log("user_role을 받았습니다.");
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
