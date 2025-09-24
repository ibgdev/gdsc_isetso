import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('featuresSection', { static: true }) featuresSection!: ElementRef;

  private observer!: IntersectionObserver;

  ngOnInit() {
    // Initialize intersection observer for scroll animations
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger animations for child elements
            const animateElements = entry.target.querySelectorAll('.fade-in-up');
            animateElements.forEach((element: Element) => {
              element.classList.add('visible');
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  ngAfterViewInit() {
    // Observe the features section and all fade-in-up elements
    this.observer.observe(this.featuresSection.nativeElement);
    
    const animateElements = this.featuresSection.nativeElement.querySelectorAll('.fade-in-up, .animate-on-scroll');
    animateElements.forEach((element: Element) => {
      this.observer.observe(element);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
