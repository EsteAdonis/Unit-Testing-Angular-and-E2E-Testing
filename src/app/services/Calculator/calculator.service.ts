import { Injectable } from '@angular/core';
import { LoggerService } from '../Logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService: LoggerService) { }
  
  add(value1: number, value2: number): number {
    this.loggerService.log('Add Operation is called');
    return value1 + value2; 
  };

  subtract(value1: number, value2: number): number {
    this.loggerService.log('Subtract Operation is called');
    return value1 - value2;
  };
}
