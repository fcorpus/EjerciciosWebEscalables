import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { BodyComponent } from "./component/body/body.component";
import { FooterComponent } from "./component/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
}
