import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Observable, of, interval, range, pipe, fromEvent } from 'rxjs';
import { map, take, takeWhile, takeUntil, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  greeting = 'Hello World!';
  temperature = 99;
  vals = [100, 200, 280, 50, 250, 75];

  menuItems =  [ 'car-makes', 'accounts' ];

  newItem: string;
  toDoItems: string[] = [
    'Learn Angular',
    'Watch GOT final episode'
  ];

  asyncNumbers: Observable<number[]>;
  timer: Observable<number>;
  elapsed: Observable<number>;

  @ViewChild('stopButton', { static: true }) stopButton: ElementRef;
  @ViewChild('pauseButton', { static: true }) pauseButton: ElementRef;

  constructor() {
    this.asyncNumbers = of([1, 2, 3, 4, 5]);
    const countdownPipe = pipe(
      map((n: number) => 10 - n),
      takeWhile(n => n >= 0)
    );
    this.timer = interval(250).pipe(countdownPipe);
  }

  isPaused = false;

  ngOnInit(): void {
    fromEvent(this.pauseButton.nativeElement, 'click')
      .subscribe(() => this.isPaused = !this.isPaused);
    let counter = 0;
    this.elapsed = interval(1000).pipe(
      filter(() => !this.isPaused),
      tap(() => counter++),
      map(() => counter),
      takeUntil(fromEvent(this.stopButton.nativeElement, 'click'))
    );
  }

  addSomethingToGreeting() {
    this.greeting += '!';
  }

  addItem() {
    this.toDoItems.push(this.newItem);
  }

  deleteItem(index: number) {
    this.toDoItems.splice(index, 1);
  }
}
