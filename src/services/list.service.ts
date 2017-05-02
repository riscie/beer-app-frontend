import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";
//import { apiUrl } from "../constants";
import { Observable } from "rxjs";


@Injectable()
export class ListService {
    CONNECTION_ERROR: string = "Es wurde ein Problem bei der Datenverbindung festegestellt. Bitte versuchen Sie es erneut.";
    baseUrl: string = "http://localhost:8100/api" + '/beers' + '?key=fbf7aa12110a12d0ec0a470368fca9b8&styleId=3';

    constructor(private http: Http) {
    }

    getBeer(): Observable<any[]> {
        return this.http.get(this.baseUrl)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    // private handleError(error: any) {
    //     console.info(this.CONNECTION_ERROR);
    //     console.error(JSON.stringify(error));
    //     // if (error.status == 403) {
    //     //     this.warningService.showErrorMessage("PERMISSION_DENIED");
    //     // } else {
    //     //     this.warningService.showErrorMessage(this.CONNECTION_ERROR);
    //     // }
    //     //
    //     // return Promise.reject(error.message || error);
    // }
}
