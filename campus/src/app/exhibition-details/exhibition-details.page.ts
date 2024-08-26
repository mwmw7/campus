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

  introduce: string[] = [
    '이 전시회는 현대 미술의 다양한 경향을 탐구합니다.',
    '참여 작가들은 다양한 배경을 가지고 있습니다.',
    '전시회는 지역 사회와의 연계를 강조합니다.',
    '관람객과의 소통을 중시하는 전시입니다.'
  ];

  members: { name: string; image: string }[] = [
    { name: '작가 A', image: 'assets/images/artist-a.jpg' },
    { name: '작가 B', image: 'assets/images/artist-b.jpg' },
    { name: '작가 C', image: 'assets/images/artist-c.jpg' },
  ];

  output: string = '전시회는 2024년 5월 1일부터 6월 30일까지 진행됩니다.';
}
