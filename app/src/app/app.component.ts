import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SearchService } from './search.service';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app';
  searchControl = new FormControl("")
  suggestions: string[] = []
  constructor(private searchService : SearchService){}
  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(value => this.searchService.search(value || ""))
    ).subscribe({
      next: (suggestions) => {
        this.suggestions = suggestions
      },
      error: (error) => {
        console.error(error)
      }
    })
  }
}
