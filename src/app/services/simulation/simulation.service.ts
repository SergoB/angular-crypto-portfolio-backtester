import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  private mockDataPath = 'mock-data/';

  constructor(private http: HttpClient) {}

  getCryptoProgression(crypto: string): Observable<number> {
    const filePath = `${this.mockDataPath}${crypto.toLowerCase()}_prices.csv`;

    return this.http.get(filePath, { responseType: 'text' }).pipe(
      map((data) => {
        const rows = data.split('\n').filter((row) => row.trim() !== '');
        if (rows.length < 2) {
          throw new Error('Not enough data');
        }

        const firstRow = rows[1].split(','); // Ignorer l'en-tête
        const lastRow = rows[rows.length - 1].split(',');

        const firstPrice = parseFloat(firstRow[1]);
        const lastPrice = parseFloat(lastRow[1]);

        if (isNaN(firstPrice) || isNaN(lastPrice)) {
          throw new Error('Invalid price data');
        }

        return ((lastPrice - firstPrice) / firstPrice) * 100; // Progression en pourcentage
      })
    );
  }
}
