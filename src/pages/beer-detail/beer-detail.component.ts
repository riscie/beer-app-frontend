import {Component, OnInit} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {BeerService} from "../../services/beer.service";
import {FavService} from "../../services/fav.service";

@Component({
    selector: 'beer-detail',
    templateUrl: 'beer-detail.component.html'
})
export class BeerDetailComponent implements OnInit {
    beer: any;
    id: string;
    isFavorite: boolean;
    isLoading: boolean = true;

    constructor(private beerService: BeerService,
                private favService: FavService,
                params: NavParams) {
        this.id = params.data.item.id;
    }

    ngOnInit() {
        this.beerService.getBeerById(this.id)
            .subscribe(result => {
                this.beer = result.data;
                this.isLoading = false;
            });
        this.checkIfIsFavorite();
    }

    toggleFavorite() {
        if (!this.isFavorite) {
            this.favService.addFavorite(this.beer)
                .subscribe();
        }
        else {
            this.favService.deleteFavorite(this.beer.id)
                .subscribe();
        }
        this.isFavorite = !this.isFavorite;
    }

    checkIfIsFavorite() {
        this.favService.getAllFavorites()
            .subscribe(result => {
                this.isFavorite = result.some(beer => beer.id === this.id);
            })
    }
}
