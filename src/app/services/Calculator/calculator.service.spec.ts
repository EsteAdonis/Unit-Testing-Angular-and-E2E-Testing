import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from '../Logger/logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let loggerService: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    loggerService =TestBed.inject(LoggerService);
    service = new CalculatorService(loggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return the sum of two numbers', () => {
    let result = service.add(5, 15);
    expect(result).toEqual(20);
    console.log('Messages: ' +loggerService.messages[0]);
  });

  it('Should return the subtraction of two numbers', () => {
    let result = service.subtract(15, 5);
    expect(result).toBeGreaterThan(0);
    console.log('Messages: ' +loggerService.messages[0]);    
  })
});
