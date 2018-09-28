import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ly-header',
  templateUrl: './ly-header.component.html',
  styleUrls: ['./ly-header.component.css']
})
export class LyHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
