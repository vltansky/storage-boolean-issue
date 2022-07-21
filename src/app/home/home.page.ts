/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {}
