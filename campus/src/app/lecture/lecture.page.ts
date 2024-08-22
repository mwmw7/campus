import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.page.html',
  styleUrls: ['./lecture.page.scss'],
})
export class LecturePage implements OnInit {

    public folder!: string;
    private activatedRoute = inject(ActivatedRoute);
    constructor() {}

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    }

}
