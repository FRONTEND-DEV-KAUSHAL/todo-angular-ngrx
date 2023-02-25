import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  darkTheme = true;
  light: any;
  ngOnInit(): void {
    this.light = localStorage.getItem('theme') || '';
    if (this.light === 'true') {
      this.light = true;
    } else {
      this.light = false;
    }
    document?.getElementById("body")?.setAttribute("data-bs-theme", this.light ? "light" : "dark");
    // this.checkRoute()
  }

  setTheme() {
    this.light = !this.light
    localStorage.setItem('theme', JSON.stringify(this.light))
    document.getElementById("body")?.setAttribute("data-bs-theme", this.light ? "light" : "dark");
  }
}
