/* eslint-disable no-underscore-dangle */
import { Component, AfterViewInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {
   ngAfterViewInit() {
    const loader = new Loader({
      apiKey: '',
      version: 'weekly',
      libraries: ['places'],
    });
    const mapOptions = {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 4,
    };
    loader
      .load()
      .then((google) => {
        console.log(google);
        console.log(document.getElementById('map'));
        new google.maps.Map(document.getElementById('map'), mapOptions);
      })
      .catch((e) => {
        // do something
        console.log(e);
      });
  }

}
