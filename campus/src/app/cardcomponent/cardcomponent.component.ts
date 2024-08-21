import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

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
}

export class CardcomponentComponent {
}
