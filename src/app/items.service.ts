import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemsService {
  constructor(private httpClient: HttpClient) {}

  fetchItems() {
    return this.httpClient.get('http://private-1b3550-phpbackend.apiary-mock.com/offerings', { responseType: 'json' });
  }
}
