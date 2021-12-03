import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  scrolled = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') == null){
      const sponsorComponents = document.getElementsByClassName('sponsor');
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0; i < sponsorComponents.length ; i++){
        // @ts-ignore
        sponsorComponents[i].style.display = 'none';
      }
      const sponseeComponents = document.getElementsByClassName('sponsee');
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0; i < sponseeComponents.length ; i++){
        // @ts-ignore
        sponseeComponents[i].style.display = 'none';
      }
      // @ts-ignore
      document.getElementById('signout').style.display = 'none';
    }
    else {
      const sponsorComponents = document.getElementsByClassName('sponsor');
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0; i < sponsorComponents.length ; i++){
        // @ts-ignore
        sponsorComponents[i].style.display = 'none';
      }
    }
  }

  sponseeLoggedin(): boolean {
    if (localStorage.getItem('role') === 'sponsee'){
      return true;
    }
    return false;
  }

  sponsorLoggedin(): boolean {
    if (localStorage.getItem('role') === 'sponsor'){
      return true;
    }
    return false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(event: Event): void {
    const nav = document.getElementById('nav');
    // @ts-ignore
    this.scrolled = window.scrollY > nav.offsetHeight;
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/']);
  }
}
