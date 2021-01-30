import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

class Slide {
  constructor(
    public imgUrl: string,
    public title: string,
    public description: string
  ) {}

  isComplete(): boolean {
    if (this.imgUrl && this.title && this.description) return true;
    else return false;
  }
}

@Component({
  selector: 'app-landing-carousel',
  templateUrl: './landing-carousel.component.html',
  styleUrls: ['./landing-carousel.component.css'],
  providers: [NgbCarouselConfig],
})
export class LandingCarouselComponent implements OnInit {
  slides: Slide[] = [];

  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.slides.push(
      new Slide(
        'https://wallpaperaccess.com/full/167408.jpg',
        'Tiger King',
        "We all know tigers are the king of the jungle, but king of his woman? I don't think so"
      )
    );
    this.slides.push(
      new Slide(
        'https://i.pinimg.com/originals/54/7a/9c/547a9cc6b93e10261f1dd8a8af474e03.jpg',
        'The Gray',
        "What if wolfs were multicolored? We shatn't know because we cant know"
      )
    );
    this.slides.push(
      new Slide(
        'https://wallpaperboat.com/wp-content/uploads/2019/06/cool-deadpool-22.jpg',
        'Deadpool 3',
        "You thought one and two were good? Well you won't think that anymore, because Deadpool 3 is bad enough to ruin all three for you"
      )
    );
    this.slides = this.filterCompleteSlides();
  }

  filterCompleteSlides(): Slide[] {
    const completeSlides: Slide[] = [];
    for (let i = 0; i < this.slides.length; i++) {
      if (this.slides[i].isComplete()) completeSlides.push(this.slides[i]);
    }
    return completeSlides;
  }

  removeSlide(index: number) {
    this.slides.splice(index, 1);
  }
}
