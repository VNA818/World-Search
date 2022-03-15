import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  home() {
    window.open("https://vna818.github.io/world-search");
  }

  about() {
    window.open("https://github.com/VNA818/world-search/blob/main/README.md", '_blank');
  }

  repo () {
    window.open("https://github.com/VNA818/world-search", '_blank');
  }

  ngOnInit(): void {
  }

}
