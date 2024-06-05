import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Character, CharacterFilter } from '../_models/character';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class FilterService {
  currentPage = new BehaviorSubject<number>(1);
  filter = new BehaviorSubject<CharacterFilter>({
    name: '',
    status: '',
    species: '',
    gender: ' ',
    page: 1,
  });
  pages = new Subject<number>();
  count = new Subject<number>();
  charecters = new Subject<Character[]>();

  constructor(private api: ApiService) {
    this.api.getCharacters().subscribe((data) => {
      this.count.next(data.info.count);
      this.pages.next(data.info.pages);
      this.charecters.next(data.results);
    });
  }

  getFilterdCharacters() {
    const filter = { ...this.filter.value, page: this.currentPage.value };
    this.api.getCharacters(filter).subscribe((data) => {
      this.count.next(data.info.count);
      this.pages.next(data.info.pages);
      this.charecters.next(data.results);
    });
  }

  setFilter(filter: CharacterFilter) {
    this.filter.next(filter);
  }

  setCurrentPage(page: number) {
    this.currentPage.next(page);
  }
}
