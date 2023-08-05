import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  
  public isDarkMode = new BehaviorSubject<boolean>(false);

  constructor() {}

  toggleDarkMode(): void {
    this.isDarkMode.next(!this.isDarkMode.value);
  }
}