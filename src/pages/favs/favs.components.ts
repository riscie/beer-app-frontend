import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FavService} from "../../services/fav.service";
import {BeerDetailComponent} from "../beer-detail/beer-detail.component";

@Component({
    selector: 'favs',
    templateUrl: 'favs.component.html'
})
export class FavsComponent implements OnInit {
    favs: Array<any> = [];

    constructor(private favService: FavService,
                private navController: NavController,
                params: NavParams) {
    }

    ngOnInit() {
        this.favService.getAllFavorites()
            .subscribe(result => this.favs = result);
    }

    viewBeer(item: any) {
        this.navController.push(BeerDetailComponent, {item: item});
    }


}
