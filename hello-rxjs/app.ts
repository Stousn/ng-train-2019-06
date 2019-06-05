import { Observable, of, range, from, interval, fromEvent } from 'rxjs';
import { map, tap, filter, take, takeLast, switchMap } from 'rxjs/operators';

let i = 0;

const observable = new Observable<number>(subscriber => {
    subscriber.next(++i);
    subscriber.next(++i);
    subscriber.next(++i);
    //subscriber.error();

    setTimeout(
        () => {
            subscriber.next(++i);
            subscriber.complete();
        },
        250);
});

// const subscription = observable.subscribe(
//     n => console.log(n),
//     () => console.error('Something bad happened'),
//     () => console.log('Done')
// );

//subscription.unsubscribe();

// of(1, 2, 3, 4, 5).subscribe(n => console.log(n));
// range(1, 1000).subscribe(n => console.log(n));

interval(500).pipe(
    // tap(n => console.log(`Currently processing ${n}`)),
    map(n => n * 2),
    take(12),
    filter(n => n < 20),
    switchMap(n => of(1 * n, 2 *n , 3 * n))
).subscribe(n => console.log(n));

const many = range(1, 100);
const lastThree = many.pipe(takeLast(3));
lastThree.subscribe(x => console.log(x));