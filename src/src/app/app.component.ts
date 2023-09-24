import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  menuIcon?: HTMLAnchorElement;
  navbar?: HTMLAnchorElement;

  sections: HTMLAnchorElement[] = [];
  navLinks: HTMLAnchorElement[] = [];

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    this.menuIcon = this.elRef.nativeElement.querySelector('#menu-icon');
    this.navbar = this.elRef.nativeElement.querySelector('.navbar');

    this.sections = this.elRef.nativeElement.querySelectorAll('section');
    this.navLinks = this.elRef.nativeElement.querySelectorAll('header nav a');
  }

  openMenu() {
    this.menuIcon!.classList.toggle('bx-x');
    this.navbar!.classList.toggle('active');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

    this.sections.forEach(section => {
      let offset = section.offsetTop - 100;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');

      if (window.scrollY >= offset && window.scrollY < offset + height) {

        this.navLinks.forEach(link => {
          link.classList.remove('active');

          this.elRef
            .nativeElement
            .querySelector('header nav a[href*=' + id + ']')
            .classList
            .add('active');
        });

        section.classList.add('show-animate');
      }

    });

    let header = this.elRef.nativeElement.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    this.menuIcon!.classList.remove('bx-x');
    this.navbar!.classList.remove('active');
  }
}