import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exhibition-details',
  templateUrl: './exhibition-details.page.html',
  styleUrls: ['./exhibition-details.page.scss'],
})
export class ExhibitionDetailsPage implements OnInit {
  cardId: number | null = null;
  cardDetails: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.cardId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCardDetails();
  }

  loadCardDetails() {
    // 실제 카드 데이터를 불러오는 로직을 여기에서 구현합니다.
    this.cardDetails = `카드 ID: ${this.cardId}의 상세 내용입니다.`;
  }
}
