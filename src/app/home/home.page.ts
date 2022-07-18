/* eslint-disable no-underscore-dangle */
import { Component, AfterViewInit } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  isSkeletonShow = true;
  slideMultiMobile = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    loop: true,
  };

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  async ngOnInit() {
    setTimeout(() => {
      this.isSkeletonShow = false;
    }, 3000);
  }
}
