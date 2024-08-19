import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";
import {alert} from "ionicons/icons";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  imports: [
    IonicModule,
    RouterLink,
    NgForOf,
    RouterLinkActive
  ],
  standalone: true
})
export class TopBarComponent {
  public TopPages = [
    { title: '전시관', url: '/gallery' },
    { title: '학습룸', url: '/folder/outbox' },
  ];

  constructor() {

  }

  ngOnInit() {}
}
