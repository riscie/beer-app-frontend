import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListService } from "../../services/list.service";

@Component({
    selector: 'beer-list',
    templateUrl: 'beer-list.component.html'
})
export class BeerListComponent implements OnInit {
    item: any;
    beers: Array<any> = [];

    constructor(public navCtrl: NavController,
                private listService: ListService,
                params: NavParams) {
        this.item = params.data.item ? params.data.item : {
            "name": "dark and toasty",
            "style": "AMERICAN BLACK ALE",
            "ids": [1, 6]
        };
    }

    ngOnInit() {
        this.listService.getBeer()
            .subscribe(
                beers => {
                    console.log(beers);
                    this.beers = beers['data'].filter(b => b.labels && b.labels.large);
                    console.log("Ids to fetch from API: " + this.item.ids);
                },
                err => {
                    console.error(JSON.stringify(err));
                });
    }
}
