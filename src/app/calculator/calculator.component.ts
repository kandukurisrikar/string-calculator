import { Component } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  input: string = '';
  result: number | string = '';

  constructor(private calculatorService: CalculatorService) { }

  calculate(): void {
    try {
      this.result = this.calculatorService.add(this.input);
    } catch (error) {
      if (error instanceof Error) {
        this.result = error.message;
      } else {
        this.result = 'An unknown error occurred';
      }
    }
  }
}
