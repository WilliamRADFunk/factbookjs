import { Injectable } from '@angular/core';

import { getCountriesData } from '../../fetch-modules/factbook/get-countries-data';

@Injectable({
  providedIn: 'root'
})
export class FactbookFetchService {

  constructor() { }

  async fetchFactbookData(): Promise<void> {
    await getCountriesData();
  }
}
