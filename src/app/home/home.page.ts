/* eslint-disable no-underscore-dangle */
import { Component, AfterViewInit } from '@angular/core';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  imageList = [];

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  async ngOnInit() {
    this.imageList = await this.resolveAfterX();
  }

  resolveAfterX(): Promise<any[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          'https://img.freepik.com/free-photo/cat-white-background_155003-15381.jpg',
          'https://img.freepik.com/premium-photo/british-shorthair-kitten-3-5-months-old-sitting-looking-up_191971-4591.jpg',
        ]);
      }, 2000);
    });
  }
}
