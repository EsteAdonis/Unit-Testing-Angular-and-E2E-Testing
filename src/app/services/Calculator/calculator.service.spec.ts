import { TestBed } from '@angular/core/testing';
import { CalculatorService } from './calculator.service';
import { LoggerService } from '../Logger/logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let mockLoggerService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    service = new CalculatorService(mockLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return the sum of two numbers', () => {
    let result = service.add(5, 15);
    expect(result).toEqual(20);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);    
  });

  it('Should return the subtraction of two numbers', () => {
    let result = service.subtract(15, 5)
    expect(result).toBeGreaterThan(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  })
});
