import { Component, OnInit } from '@angular/core';
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  title='Navbar Component';
  filmIcon = faBookAtlas;
  constructor () {}
  ngOnInit () {}
}
