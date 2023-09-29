import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DarkModeService } from './dark-mode.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(public darkModeService: DarkModeService, private router: Router){}
  ngOnInit(): void {
    const parallaxSections = document.querySelectorAll('.parallax-section');


    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      for (let i = 0; i < parallaxSections.length; i++) {
        const parallaxOffset = scrollTop * 0.5; // Adjust the value 0.4 according to the desired effect
        (parallaxSections[i] as HTMLElement).style.transform = `translateY(${parallaxOffset}px)`;
      }
    });
    const parallaxSections1 = document.querySelectorAll('.parallax-section1');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  for (let i = 0; i < parallaxSections1.length; i++) {
    const parallaxOffset = -scrollTop * 0.5; // Ajustez la valeur 0.4 selon l'effet désiré
    (parallaxSections1[i] as HTMLElement).style.transform = `translateY(${parallaxOffset}px)`;
  }
});
    
  }
  
  title = 'douxbail';
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const elements = document.querySelectorAll('.scroll-animation');
    const elements1 = document.querySelectorAll('.scroll-animation1');
    
  
    elements.forEach((element: any) => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
  
      if (elementTop < windowHeight + scrollY) {
        element.classList.add('animate');
      }
    });
    elements1.forEach((element1: any) => {
      const rect = element1.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
  
      if (elementTop < windowHeight + scrollY) {
        element1.classList.add('animate');
      }
    });
  }
  isDarkMode = false;
  handleClick(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  @ViewChild('button') buttonElement: ElementRef | undefined;
  @ViewChild('button1') button1Element: ElementRef | undefined;
  
  toggleDarkMode(): void {
  
    const button = this.buttonElement?.nativeElement;
    const button1 = this.button1Element?.nativeElement;

    this.darkModeService.toggleDarkMode();
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      button.innerText = 'LIGHT';
      button1.innerText = 'LIGHT';
      
    } else {
      button.innerText = 'DARK';
      button1.innerText = 'DARK';
    }
  }

  goToCurrentPage() {
    this.router.navigateByUrl('/header').then(() => {
      setTimeout(() => {
        const element = document.getElementById('top');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}
