import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages: string[] = [];
  
  log(message: string): void {
    this.messages = [...this.messages, message];
  }

  clear() {
    this.messages = [];
  }
}
