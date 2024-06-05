import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, CharacterFilter } from '../_models/character';

const API_URL = 'https://rickandmortyapi.com/api/character';

@Injectable({ providedIn: 'root' })
export class ApiService {
  filter: CharacterFilter = {
    name: '',
    gender: '',
    status: '',
    species: '',
    page: 1,
  };
  constructor(private http: HttpClient) {}

  getCharacters(filter: CharacterFilter = this.filter) {
    return this.http.get<ApiResponse>(
      API_URL +
        `?page=${filter?.page}&name=${filter?.name}&gender=${filter?.gender}&status=${filter?.status}&species=${filter?.species}`
    );
  }
}
