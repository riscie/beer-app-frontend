import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Observable} from "rxjs";
import {BeerService} from "../../services/beer.service";
import {BeerDetailComponent} from "../beer-detail/beer-detail.component";

@Component({
    selector: 'beer-list',
    templateUrl: 'beer-list.component.html'
})
export class BeerListComponent implements OnInit {
    item: any;
    beers: Array<any> = [];

    constructor(private beerService: BeerService,
                private navController: NavController,
                params: NavParams) {
        this.item = params.data.item;
    }

    ngOnInit() {
        this.getBeerFromStyleArray(this.item.ids);
    }

    getBeerFromStyleArray(ids: number[]) {
        // Creating an array of observables and using forkJoin to wait for all of them to emit their value
        // For every Beer-StyleId we add the corresponding beers to the beers array to display them within the list
        const observables = [];
        ids.forEach(id => {
            observables.push(this.beerService.getBeerByStyleId(id));
        });
        Observable.forkJoin(observables).subscribe(
            (result) => {
                result.forEach(list => {
                        this.beers.push(...list['data'].filter(b => b.labels && b.labels.large));
                    },
                    err => {
                        console.error(JSON.stringify(err));
                    })
            });
    }

    viewBeer(item: any) {
        this.navController.push(BeerDetailComponent, {item: item});
    }
}
