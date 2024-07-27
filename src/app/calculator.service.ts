import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = ',|\n';
    if (numbers.startsWith('//')) {
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        delimiter = delimiterMatch[1];
        numbers = numbers.substring(delimiterMatch[0].length);
      }
    }

    const numberArray = numbers.split(new RegExp(delimiter)).map(num => parseInt(num, 10));
    const negatives = numberArray.filter(num => num < 0);

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return numberArray.reduce((acc, curr) => acc + curr, 0);
  }
}
