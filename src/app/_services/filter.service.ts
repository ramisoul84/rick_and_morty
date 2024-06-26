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
  loading = new BehaviorSubject<boolean>(true);
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
    this.api.getCharacters(filter).subscribe({
      next: (data) => {
        this.count.next(data.info.count);
        this.pages.next(data.info.pages);
        this.charecters.next(data.results);
      },
      error: (e) => {
        this.count.next(0);
        this.pages.next(1);
        this.charecters.next([]);
        console.info('No Results Found!!');
      },
      complete: () => {
        this.loading.next(false);
        console.info('complete');
      },
    });
  }

  setFilter(filter: CharacterFilter) {
    this.filter.next(filter);
  }

  setCurrentPage(page: number) {
    this.currentPage.next(page);
  }
}
