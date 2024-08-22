import { Component } from '@angular/core';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.page.html',
  styleUrls: ['./secondpage.page.scss'],
})
export class SecondpagePage  {
  cards = [
    {
      title: '전시 카드 제목 1',
      teamname: '팀 이름 1',
      content: '카드 내용 설명 1입니다.',
      image: "../../assets/jpg/1.jpg"
    },
    {
      title: '전시 카드 제목 2',
      teamname: '팀 이름 2',
      content: '카드 내용 설명 3입니다.',
      image: "../../assets/jpg/2.jpg"
    },
    {
      title: '전시 카드 제목 3',
      teamname: '팀 이름 3',
      content: '카드 내용 설명 3입니다.',
      image: "../../assets/jpg/3.jpg"
    },
    {
      title: '전시 카드 제목 4',
      teamname: '팀 이름 4',
      content: '카드 내용 설명 4입니다.',
      image: "../../assets/jpg/4.jpg"
    },


  ];

  accordionTitle: string = '최신순';
  isOpen: boolean = true;

  constructor() { }
  changeTitle(newTitle: string) {
    this.accordionTitle = newTitle; // 제목 변경
    this.isOpen = !this.isOpen; // 아코디언 열림/닫힘 상태 반전
  }



}
