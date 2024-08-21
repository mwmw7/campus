import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../cardcomponent/cardcomponent.component';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.page.html',
  styleUrls: ['./secondpage.page.scss'],
})
export class SecondpagePage implements OnInit {
  cards = [
    {
      title: '전시 카드 제목 1',
      teamname: '팀 이름 1',
      content: '카드 내용 설명 1입니다.',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      title: '전시 카드 제목 2',
      teamname: '팀 이름 2',
      content: '카드 내용 설명 2입니dksfhkjsdhfakjsldhfdkjlsahfkljsdahfkjldshfkjahfkjshdfjhdkjslahfjkdshafkjsdhafjkhafdjkshjklfahskfhjshfaskjdlhfjdshaflkhdsjafhlkfhdsajfhjdksahfkjsadhfjfladshfjksadhflk다.',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    },
    {
      title: '전시 카드 제목 3',
      teamname: '팀 이름 3',
      content: '카드 내용 설명 3입니다.',
      image: 'https://ionicframework.com/docs/img/demos/card-media.png'
    }
  ];

  accordionTitle: string = '최신순';
  isOpen: boolean = true;

  constructor() { }
  changeTitle(newTitle: string) {
    this.accordionTitle = newTitle; // 제목 변경
    this.isOpen = !this.isOpen; // 아코디언 열림/닫힘 상태 반전
  }

  ngOnInit() {
  }

}
