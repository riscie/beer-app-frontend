import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DiscoverDetails } from "../discover-detail/discover-detail";


@Component({
    selector: 'discover',
    templateUrl: 'discover.html',
})
export class DiscoverComponent {

    classNames: any = ["hoppy", "balanced", "malty", "tart"]

    items: any = [
        {
            name: "hoppy",
            subcategories: [
                {name: "somewhat hoppy", className: "hoppy"},
                {name: 'wicked hoppy', className: "balanced"}
            ]
        },
        {
            name: "balanced",
            subcategories: [
                {name: "light in color"},
                {name: 'dark in color'}
            ]
        },
        {
            name: "malty",
            subcategories: [
                {name: "dark & toasty"},
                {name: 'fruity & estery'},
                {name: 'rich, steely caramel'}
            ]
        },
        {
            name: "tart",
            subcategories: [
                {name: "mild to moderate tartness"},
                {name: 'puckering'}
            ]
        }];

    constructor(public navController: NavController,
                public navParams: NavParams,) {
    }

    openNavDetailsPage(item) {
        console.log(item);
        this.navController.push(DiscoverDetails, {item: item});
    }

}
