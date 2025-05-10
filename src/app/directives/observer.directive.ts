import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appObserver]',
    standalone: false
})
export class ObserverDirective {
  @Output() viewChange = new EventEmitter(true);
  options: object;
  observer: IntersectionObserver;

  constructor(private el: ElementRef) {
    this.options = {
      root: null, // sets the framing element to the viewport
      rootMargin: '0px',
      threshold: [0, 1],
    };

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const event = {
          inView: entry.isIntersecting,
          el: entry.target
        }
        this.viewChange.emit(event);
      });
    }, this.options);

    this.observer.observe(this.el.nativeElement);
  }
}
