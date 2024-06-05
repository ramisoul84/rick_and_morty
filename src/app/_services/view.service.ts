import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ViewService {
  cols = new BehaviorSubject<number>(2);
  isShown = new BehaviorSubject<boolean>(false);

  setCols(cols: number) {
    this.cols.next(cols);
  }

  filterToggle() {
    this.isShown.next(!this.isShown.value);
  }
}
