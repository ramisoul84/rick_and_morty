import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FilterService } from '../../_services/filter.service';
import { ViewService } from '../../_services/view.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  filterForm!: FormGroup;
  count!: number;
  isShown!: boolean;
  constructor(
    private fb: FormBuilder,
    private filterService: FilterService,
    private viewServcie: ViewService
  ) {}
  ngOnInit(): void {
    this.viewServcie.isShown.subscribe((data) => (this.isShown = data));
    this.filterForm = this.fb.group({
      name: this.fb.control(''),
      status: this.fb.control(''),
      species: this.fb.control(''),
      gender: this.fb.control(''),
    });
    this.filterService.count.subscribe((data) => (this.count = data));
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.filterService.setCurrentPage(1);
    const filter = { ...this.filterForm.value, page: 1 };
    this.filterService.setFilter(filter);
    this.filterService.getFilterdCharacters();
  }
}
