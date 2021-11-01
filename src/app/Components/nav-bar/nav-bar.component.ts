import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isChecked!: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.isChecked);
  }

  // Close the hamburger menu on link click

  async closeMenu() {
    this.isChecked = true;
    await this.animationTimer(1) // menu will not close every time without this delay -.-
    this.isChecked = false;
    
    
  }

  async animationTimer (ms: number) {
    return new Promise(res => setTimeout(res, ms));
  }
}
