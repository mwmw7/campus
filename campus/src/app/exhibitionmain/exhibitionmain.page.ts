import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exhibitionmain',
  templateUrl: './exhibitionmain.page.html',
  styleUrls: ['./exhibitionmain.page.scss'],
})
export class ExhibitionmainPage  {
  cards = [
    {
      id: 1,
      title: 'Metaverse Campus제작입니다루',
      teamname: 'HIP',
      content: '앵식이',
      image: "../../assets/jpg/1.jpg"
    },
    {
      id: 2,
      title: '전시 카드 제목 2',
      teamname: '팀 이름 2',
      content: '카드 내용 설명 3입니다.',
      image: "../../assets/jpg/2.jpg"
    },
    {
      id: 3,
      title: '전시 카드 제목 3',
      teamname: '팀 이름 3',
      content: '카드 내용 설명 3입니다.',
      image: "../../assets/jpg/3.jpg"
    },
    {
      id: 4,
      title: '전시 카드 제목 4',
      teamname: '팀 이름 4',
      content: '카드 내용 설명 4입니다.',
      image: "../../assets/jpg/4.jpg"
    },
    {
      id: 5,
      title: '전시 카드 제목 1',
      teamname: '팀 이름 1',
      content: '카드 내용 설명 1입니다.',
      image: "../../assets/jpg/1.jpg"
    },
    {
      id: 6,
      title: '전시 카드 제목 2',
      teamname: '팀 이름 2',
      content: '카드 내용 설명 3입니다.',
      image: "../../assets/jpg/2.jpg"
    },
    {
      id: 7,
      title: '전시 카드 제목 3',
      teamname: '팀 이름 3',
      content: '카드 내용 설명 3입니다.',
      image: "../../assets/jpg/3.jpg"
    },
    {
      id: 8,
      title: '전시 카드 제목 4',
      teamname: '팀 이름 4',
      content: '카드 내용 설명 4입니다.',
      image: "../../assets/jpg/4.jpg"
    },
    {
      id: 9,
      title: '전시 카드 제목 1',
      teamname: '팀 이름 1',
      content: '카드 내용 설명 1입니다.',
      image: "../../assets/jpg/1.jpg"
    },
    {
      id: 10,
      title: '전시 카드 제목 2',
      teamname: '팀 이름 2',
      content: '카드 내용 설명 3입니다.',
      image: "../../assets/jpg/2.jpg"
    },
    {
      id: 11,
      title: '전시 카드 제목 3',
      teamname: '팀 이름 3',
      content: '카드 내용 설명 3입니다.',
      image: "../../assets/jpg/3.jpg"
    },
    {
      id: 12,
      title: '전시 카드 제목 4',
      teamname: '팀 이름 4',
      content: '카드 내용 설명 4입니다.',
      image: "../../assets/jpg/4.jpg"
    },
    {
      id: 13,
      title: '전시 카드 제목 1',
      teamname: '팀 이름 1',
      content: '카드 내용 설명 1입니다.',
      image: "../../assets/jpg/1.jpg"
    },
    {
      id: 14,
      title: '전시 카드 제목 2',
      teamname: '팀 이름 2',
      content: '카드 내용 설명 3입니다.',
      image: "../../assets/jpg/2.jpg"
    },
    {
      id: 15,
      title: '전시 카드 제목 3',
      teamname: '팀 이름 3',
      content: '카드 내용 설명 3입니다.',
      image: "../../assets/jpg/3.jpg"
    },
    {
      id: 16,
      title: '전시 카드 제목 4',
      teamname: '팀 이름 4',
      content: '카드 내용 설명 4입니다.',
      image: "../../assets/jpg/4.jpg"
    },
    {
      id: 17,
      title: '전시 카드 제목 1',
      teamname: '팀 이름 1',
      content: '카드 내용 설명 1입니다.',
      image: "../../assets/jpg/1.jpg"
    },
    {
      id: 18,
      title: '전시 카드 제목 2',
      teamname: '팀 이름 2',
      content: '카드 내용 설명 3입니다.',
      image: "../../assets/jpg/2.jpg"
    },
    {
      id: 19,
      title: '전시 카드 제목 3',
      teamname: '팀 이름 3',
      content: '카드 내용 설명 3입니다.',
      image: "../../assets/jpg/3.jpg"
    },
    {
      id: 20,
      title: '전시 카드 제목 4',
      teamname: '팀 이름 4',
      content: '카드 내용 설명 4입니다.',
      image: "../../assets/jpg/4.jpg"
    },



  ];

  accordionTitle: string = '최신순';
  isOpen: boolean = true;

  constructor(private router: Router) { }
  navigateToExhibition(exhibitionId: number) {
    this.router.navigate(['/exhibition', exhibitionId]);
  }

  changeTitle(newTitle: string) {
    this.accordionTitle = newTitle; // 제목 변경
    this.isOpen = !this.isOpen; // 아코디언 열림/닫힘 상태 반전
  }



}
