import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lodging } from 'src/app/data/lodging.model';
import { LodgingService } from 'src/app/services/lodging/lodging.service';

@Component({
  selector: 'uic-booking',
  templateUrl: './booking.component.html',
<<<<<<< HEAD
  styleUrls: ['./booking.component.scss'],
=======
>>>>>>> 1836d848ecf12dc65851e133924e4bbaffc16c39
})
export class BookingComponent implements OnInit {
  lodgings$: Observable<Lodging[]>;

  isSearched: boolean = false;

  constructor(private lodgingService: LodgingService) {}

  ngOnInit(): void {
    this.lodgings$ = this.lodgingService.get();

    this.lodgings$.pipe(
      map((lodgings) => {
        lodgings.map((lodging) => lodging.rentals);
      })
    );

    this.lodgings$.pipe(
      map((lodgings) => {
        lodgings.map((lodging) => lodging.reviews);
      })
    );
    this.lodgings$.subscribe((value) => console.log(value));
  }
}
