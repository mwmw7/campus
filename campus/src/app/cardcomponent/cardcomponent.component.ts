import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class CardComponent {

  @Input() title: string = 'Card Title';
  @Input() teamname: string = 'Card Subtitle';
  @Input() content: string = "Here's a small text description for the card content.";
  @Input() image: string = 'https://ionicframework.com/docs/img/demos/card-media.png';
  @Input() id: number = 0;

  constructor(private router: Router) {}

  navigateToDetail() {
    this.router.navigate(['/exhibition-details', this.id]); // 상세 페이지로 이동
  }
}



