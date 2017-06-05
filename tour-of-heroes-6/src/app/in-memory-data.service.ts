import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {id: 11, name: 'Black Widow'},
      {id: 12, name: 'Captain America'},
      {id: 13, name: 'Iron Man'},
      {id: 14, name: 'Thor'},
      {id: 15, name: 'The Hulk'},
      {id: 16, name: 'Jean Grey'},
      {id: 17, name: 'The Green Lantern'},
      {id: 18, name: 'Vision'},
      {id: 19, name: 'The Spectre'},
      {id: 20, name: 'Spiderman'},
	  {id: 21, name: 'The Submariner'},
	  {id: 22, name: 'Rogue'},
	  {id: 23, name: 'Storm'},
	  {id: 24, name: 'The Green Arrow'},
	  {id: 25, name: 'Doctor Strange'},
	  {id: 26, name: 'Wolverine'},
	  {id: 27, name: 'Professor Xavier'},
	  {id: 28, name: 'Batman'},
	  {id: 29, name: 'Superman'},
	  {id: 30, name: 'Mystique'}
    ];
    return {heroes};
  }
}
