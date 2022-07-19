/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { NguCarouselStore } from '@ngu/carousel';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  carouselBanner = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1, all: 0 },
    slide: 1,
    speed: 400,
    interval: {
      timing: 3000,
      initialDelay: 1000
    },
    point: {
      visible: true
    },
    load: 2,
    loop: true,
    touch: true
  };

/* It will be triggered on every slide*/
onmoveFn(data: NguCarouselStore) {
  console.log(data);
}

trackCarousel(_, item) {
  return item;
}
}
