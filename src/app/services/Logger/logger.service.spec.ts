import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should add message throughout log method', () => {
    service.log('Greeting Adonis Eros')
    expect(service.messages.length).toBeGreaterThan(0);
  });

  it('Should clear all the message when clear is called', () => {
    service.log('message');
    service.clear();
    expect(service.messages.length).toBe(0);
  });
});
