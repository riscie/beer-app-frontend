import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BeerListComponent } from "../beer-list/beer-list.component";

@Component({
    selector: 'discover-details',
    templateUrl: 'discover-details.html',
})
export class DiscoverDetails {
    item: any;
    classNames: any = ["hoppy", "balanced", "malty", "tart"];

    constructor(private navController: NavController,
                params: NavParams) {
        this.item = params.data.item;
    }

    openNavDetailsPage(item) {
        if (!item.ids) {
            this.navController.push(DiscoverDetails, {item: item});
        } else {
            this.navController.push(BeerListComponent, {item: item});
        }
    }
}
