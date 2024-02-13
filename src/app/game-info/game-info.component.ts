import { Component, Input, OnChanges } from '@angular/core';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule, MatCardHeader, MatCardContent],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnChanges {

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to drink !'},
    { title: 'You', description: 'You decide who drinks !'},
    { title: 'Me', description: 'Congrats ! Drink a shot !'},
    { title: 'Girls', description: 'All Girls drink !'},
    { title: 'Heaven', description: 'Put your hands up ! The last player drinks !'},
    { title: 'Men', description: 'All men drink !'},
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule !'},
    { title: 'Never have I ever...', description: 'Say something you never did. Everyone who did it has to drink !'},
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around !'},
    { title: 'You', description: 'You decide who drinks !'},
    { title: 'Men', description: 'All men drink !'},
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' }
  ];

  title: string = '';
  description: string = '';
  @Input() card: string = '';


  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}

