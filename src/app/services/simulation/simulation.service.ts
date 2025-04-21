import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  private mockDataPath = 'mock-data/';

  private performanceCache: Map<string, BehaviorSubject<number>> = new Map();

  constructor(private http: HttpClient) {
  }


  getCryptoPerformance(crypto: string): Observable<number> {

    if (this.performanceCache.has(crypto)) {
      return this.performanceCache.get(crypto)!.asObservable();
    }

    const filePath = `${this.mockDataPath}${crypto.toLowerCase()}_prices.csv`;

    const performanceSubject = new BehaviorSubject<number>(0);
    this.http.get(filePath, {responseType: 'text'}).subscribe({
      next: (data) => {
        const rows = data.split('\n').filter((row) => row.trim() !== '');
        if (rows.length < 2) {
          throw new Error('Not enough data');
        }

        const firstRow = rows[1].split(','); // Ignorer l'en-tête
        const lastRow = rows[rows.length - 1].split(',');

        const firstPrice = parseFloat(firstRow[1]);
        const lastPrice = parseFloat(lastRow[1]);

        if (isNaN(firstPrice) || isNaN(lastPrice)) {
          performanceSubject.next(0);
        } else {
          const result = Number((((lastPrice - firstPrice) / firstPrice) * 100).toFixed(2));
          console.log(`Computed ${result} for ${crypto}`);
          performanceSubject.next(result);
        }
      },
      error: () => {
        performanceSubject.next(0);
      }
    });

    this.performanceCache.set(crypto, performanceSubject);
    return performanceSubject.asObservable();
  }
}
