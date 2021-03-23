import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  myGroup: any;
  filteredOptions: any;
 planClient = new FormControl();
  clients: string[] = [
    'Alabama',
    'California',
    'Colorado',
    'Connecticut',
    'SelectHealth',
    'UMR'
  ];
  ngOnInit() {

    this.filteredOptions = this.planClient.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    console.log(value);
    const filterValue = value.toLowerCase();

    return this.clients.filter(clients => clients.toLowerCase().includes(filterValue));
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */