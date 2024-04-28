import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let calculatorService: CalculatorService;
  let mockLoggerService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calculatorService = new CalculatorService(mockLoggerService);
  });

  it('should be created', () => {
    expect(calculatorService).toBeTruthy();
  });

  it('Should return the sum of two numbers', () => {
    let result = calculatorService.add(5, 15);
    expect(result).toEqual(20);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);    
  });

  it('Should return the subtraction of two numbers', () => {
    let result = calculatorService.subtract(15, 5)
    expect(result).toBeGreaterThan(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  })
});
