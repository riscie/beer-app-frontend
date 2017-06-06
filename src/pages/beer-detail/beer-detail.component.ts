import {Component, OnInit} from '@angular/core';
import {NavParams, ToastController} from 'ionic-angular';
import {BeerService} from "../../services/beer.service";
import {FavService} from "../../services/fav.service";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'beer-detail',
    templateUrl: 'beer-detail.component.html'
})
export class BeerDetailComponent implements OnInit {
    beer: any;
    id: string;
    isFavorite: boolean;
    isLoading: boolean = true;
    imageHasLoaded: boolean;
    note: string;
    hasNote: boolean;
    noteControl = new FormControl();

    constructor(private beerService: BeerService,
                private favService: FavService,
                params: NavParams,
                private toastCtrl: ToastController) {
        this.id = params.data.item.id;
    }

    ngOnInit() {
        this.beerService.getBeerById(this.id)
            .subscribe(result => {
                this.beer = result.data;
                this.isLoading = false;
            });
        this.checkIfIsFavorite();

        this.getNoteForBeer();

        // debounce keystroke events on the note textarea
        this.noteControl.valueChanges
            .debounceTime(1500)
            .subscribe(newValue => {
                this.note = newValue;
                if (!this.hasNote) {
                    this.favService.createNote({id: this.id, note: this.note})
                        .subscribe(() => {
                            this.presentMessage("📓 Notitz hinzugefügt");
                            this.hasNote = true;
                        });
                } else {
                    if (this.note === "") {
                        this.favService.deleteNote({id: this.id, note: this.note})
                            .subscribe(() => {
                                this.presentMessage("📓 Notitz gelöscht");
                                this.hasNote = false;
                            });
                    } else {
                        this.favService.updateNote({id: this.id, note: this.note})
                            .subscribe(() => {
                                this.presentMessage("📓 Notitz aktualisiert");
                            });
                    }

                }
            });

    }

    imageLoaded() {
        this.imageHasLoaded = true;
    }

    getNoteForBeer() {
        this.favService.getNoteForBeer(this.id)
            .subscribe((result) => {
                this.note = result.note;
                this.hasNote = result.note;
            });
    }

    presentMessage(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            cssClass: "toast",
        });
        toast.present();
    }

    toggleFavorite() {
        if (!this.isFavorite) {
            this.favService.addFavorite(this.beer)
                .subscribe(() => {
                    this.presentMessage(`❤️ "${this.beer.name}" zu Favoriten hinzugefügt`)
                });
        }
        else {
            this.favService.deleteFavorite(this.beer.id)
                .subscribe(() => {
                    this.presentMessage(`💔️ "${this.beer.name}" von Favoriten entfernt`)
                });
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
