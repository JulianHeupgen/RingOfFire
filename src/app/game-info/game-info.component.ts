import { Component } from '@angular/core';
import { MatCardContent, MatCardHeader, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule, MatCardHeader, MatCardContent],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent {

}
