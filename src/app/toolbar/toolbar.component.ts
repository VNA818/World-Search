import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { GameService } from '../game.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  @Input() menu!: MatSidenav;
  @Input() history!: MatSidenav;
  @Input() streak: number = 0;

  constructor (private game: GameService) {}

  menuClick() {
    this.menu.toggle();
  }

  historyClick() {
    this.history.toggle();
  }

  streakClick() {
    this.game.alertBox("You have a country streak of " + this.streak, "Dismiss");
  }

  ngOnInit(): void {
  }

}
