import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-join-modal',
  templateUrl: './join-modal.page.html',
  styleUrls: ['./join-modal.page.scss'],
})
export class JoinModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  dismissModal() {
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
