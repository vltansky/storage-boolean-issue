/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public state = false;
  constructor(private _storageService: StorageService) { }

  ngOnInit() {
  }

  async onAddStorage() {
   this.state =  await this._storageService.LS.set('indra', true);
  }

  async onRemoveStorage() {
    await this._storageService.LS.remove('indra');
  }

  async onGetStorage() {
    const data = await this._storageService.LS.get('indra');
    console.log(data);
    this.state = data;
  }

}
