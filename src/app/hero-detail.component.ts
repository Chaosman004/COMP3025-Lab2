import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-hero-detail', 
    templateUrl: `app/app.component.html`
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}