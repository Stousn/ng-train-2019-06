import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

interface MakeAndModelData {
  make: string;
  numberOfModels: number;
}

@Component({
  selector: 'app-car-makes-list',
  templateUrl: './car-makes-list.component.html',
  styleUrls: ['./car-makes-list.component.css']
})
export class CarMakesListComponent implements OnInit {
  makes: Observable<MakeAndModelData[]>;

  constructor(private client: HttpClient) { }

  ngOnInit() {
    this.makes = this.client
      .get<string[]>('https://vehicle-data.azurewebsites.net/api/makes')
      .pipe(map(makes => {
        return makes.map(m => ({ make: m, numberOfModels: undefined }));
      }));

    // for (const m of makesFromWebApi) {
    //   const models = await this.client
    //     .get<any[]>(`https://vehicle-data.azurewebsites.net/api/models?make=${m}`)
    //     .toPromise();
    //   this.makes.push([m, models.length]);
    // }
  }
}
