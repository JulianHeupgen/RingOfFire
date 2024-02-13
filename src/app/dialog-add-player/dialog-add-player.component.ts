import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatFormFieldModule, MatButtonModule, FormsModule, MatDialogClose, 
    MatInputModule, MatDialogTitle],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {

  name: string = '';

}
