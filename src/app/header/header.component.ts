import { Component, HostListener, OnInit } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  constructor(public darkModeService: DarkModeService){}
  imagePath: string = "https://cdn.discordapp.com/attachments/406419836785262592/1133887134089105418/85c27cbc-9aea-41cb-9bed-c10f9704a480.png";
  imageUrl: string = '';
  coverUrl: string='';
  [x: string]: any;
  ngOnInit(): void {
    this.darkModeService.isDarkMode.subscribe((isDarkMode: any) => {

      this.imageUrl = isDarkMode
        ? 'assets/logoblanc.png'
        :'assets/logo.png' ;
      this.coverUrl = isDarkMode
        ? 'assets/cover_light.JPG'
        :'assets/hautburger.png'
    });
    const parallaxSections = document.querySelectorAll('.parallax-section');


    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      for (let i = 0; i < parallaxSections.length; i++) {
        const parallaxOffset = scrollTop * 0.5; 
        (parallaxSections[i] as HTMLElement).style.transform = `translateY(${parallaxOffset}px)`;
      }
    });
    const parallaxSections1 = document.querySelectorAll('.parallax-section1');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  for (let i = 0; i < parallaxSections1.length; i++) {
    const parallaxOffset = -scrollTop * 0.31; 
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
handleClick(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


}