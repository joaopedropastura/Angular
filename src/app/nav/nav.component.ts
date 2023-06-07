import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  links = ['Home', 'Feed', 'comunity', 'Login'];
  activeLink = this.links[0];

  background: ThemePalette = 'primary';

}
