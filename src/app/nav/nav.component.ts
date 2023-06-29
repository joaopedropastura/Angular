import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  links = {'home':'Home', 'feed':'Feed', 'comunity':'Comunidade', 'login':'Login'};
  activeLink = this.links.home;

  background: ThemePalette = 'primary';
}
