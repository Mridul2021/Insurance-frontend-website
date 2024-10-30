import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FooterComponent, ServicesComponent, HeroComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
