import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListService } from "../../services/list.service";

@Component({
    selector: 'beer-list',
    templateUrl: 'beer-list.component.html'
})
export class BeerListComponent implements OnInit {
    beers: Array<any> = [];

    constructor(public navCtrl: NavController,
                private listService: ListService) {
    }

    ngOnInit() {
        this.listService.getBeer()
            .subscribe(
                beers => {
                    console.log(beers);
                    this.beers = beers['data'];
                },
                err => {
                    console.error(JSON.stringify(err));
                });
    }
}
