import { Component } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";
import { NamesListComponent } from "../names-list/names-list.component";

@Component({
  selector: 'app-body',
  imports: [CounterComponent, NamesListComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  
}
