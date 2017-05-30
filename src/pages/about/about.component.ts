import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'about',
    templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {
    beer: any;
    id: string;
    isFavorite: boolean;
    isLoading: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

}
