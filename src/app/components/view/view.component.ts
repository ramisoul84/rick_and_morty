import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../_services/view.service';
import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent implements OnInit {
  currentPage!: number;
  pages!: number;

  constructor(
    private viewService: ViewService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.filterService.currentPage.subscribe(
      (data) => (this.currentPage = data)
    );
    this.filterService.pages.subscribe((data) => (this.pages = data));
  }

  onSetCols(cols: number): void {
    this.viewService.setCols(cols);
  }

  onNextPage() {
    let newPage =
      this.currentPage < this.pages ? this.currentPage + 1 : this.currentPage;
    this.filterService.setCurrentPage(newPage);
    this.filterService.getFilterdCharacters();
  }

  onPreviouspage() {
    let newPage =
      this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
    this.filterService.setCurrentPage(newPage);
    this.filterService.getFilterdCharacters();
  }

  filterToggle() {
    this.viewService.filterToggle();
  }
}
