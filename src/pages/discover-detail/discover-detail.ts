import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'discover-details',
    templateUrl: 'discover-details.html',
})
export class DiscoverDetails {
    item;
    classNames: any = ["hoppy", "balanced", "malty", "tart"];

    constructor(public navController: NavController,
                params: NavParams) {
        this.item = params.data.item;
    }

    openNavDetailsPage(item) {
        console.log(item);
        this.navController.push(DiscoverDetails, {item: item});
    }
}