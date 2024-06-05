import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../_services/view.service';
import { FilterService } from '../../_services/filter.service';
import { Character } from '../../_models/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  cols!: number;
  characters!: Character[];

  constructor(
    private viewService: ViewService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.viewService.cols.subscribe((data) => (this.cols = data));
    this.filterService.charecters.subscribe((data) => (this.characters = data));
  }
}
