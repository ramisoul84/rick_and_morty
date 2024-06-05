import { Component, Input } from '@angular/core';
import { Character } from '../../_models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss',
})
export class CharacterComponent {
  @Input()
  character!: Character;
}
/*
  character: Character = {
    id: 361,
    name: 'Toxic Rick',
    status: 'Dead',
    species: 'Humanoid',
    type: "Rick's Toxic Side",
    gender: 'Male',
    origin: {
      name: 'Alien Spa',
      url: 'https://rickandmortyapi.com/api/location/64',
    },
    location: {
      name: 'Earth',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    url: 'https://rickandmortyapi.com/api/character/361',
    created: '2018-01-10T18:20:41.703Z',
  };
*/
