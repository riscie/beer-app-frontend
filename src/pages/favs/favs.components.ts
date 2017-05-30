import {Component, OnInit} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {ListService} from "../../services/list.service";

@Component({
    selector: 'favs',
    templateUrl: 'favs.component.html'
})
export class FavsComponent implements OnInit {
    favs: Array<any> = [];

    constructor(private listService: ListService,
                params: NavParams) {
    }

    ngOnInit() {
    }


}
