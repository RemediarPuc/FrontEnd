import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(chave: string, value: any): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(chave, JSON.stringify(value));
    }
  }

  getItem(chave: string): any {
    if (typeof localStorage !== 'undefined') {
      const item = localStorage.getItem(chave);
      return item ? JSON.parse(item) : null;
    }
    return null;
  }

  removeItem(chave: string): void {
    localStorage.removeItem(chave);
  }

  clear(): void {
    localStorage.clear();
  }
}