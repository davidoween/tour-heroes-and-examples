import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../heroes/Hero';
import { HeroService } from '../../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})

export class HeroSearchComponent implements OnInit {

  // heroes$: Observable<Hero[]>;
  // private searchTerms = new Subject<string>();

  // constructor(private heroService: HeroService) { }

  // // Push a search term into the observable stream.
  // search(term: string): void {
  //   this.searchTerms.next(term);
  // }

  // ngOnInit(): void {
  //   this.heroes$ = this.searchTerms.pipe(
  //     // wait 300ms after each keystroke before considering the term
  //     debounceTime(300),
  //     // ignore new term if same as previous term
  //     distinctUntilChanged(),
  //     // switch to new search observable each time the term changes
  //     switchMap((term: string) => this.heroService.searchHeroes(term)),
  //   );
  // }

  heroes: Hero[];
  timer: any;
  loading: boolean;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

  }
  // Push a search term into the observable stream.
  search(term: string): void {
    this.loading = true;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.loading = false;
      console.log("vamos al servidor")
      this.heroService.searchHeroes(term).subscribe(heroes => this.heroes = heroes)
    }, 500);

  }
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/