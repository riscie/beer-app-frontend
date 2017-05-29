import {Component, OnInit} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {ListService} from "../../services/list.service";
import {Observable} from "rxjs";

@Component({
    selector: 'beer-list',
    templateUrl: 'beer-list.component.html'
})
export class BeerListComponent implements OnInit {
    item: any;
    beers: Array<any> = [];

    constructor(private listService: ListService,
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
            observables.push(this.listService.getBeerByStyleId(id));
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
}
