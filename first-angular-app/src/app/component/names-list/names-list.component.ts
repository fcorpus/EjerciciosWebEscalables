import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-names-list',
  imports: [NgFor],
  templateUrl: './names-list.component.html',
  styleUrl: './names-list.component.css'
})
export class NamesListComponent {
  names: string[] = ["Juan", "Pedro", "Maria", "sierra-117"]
}
