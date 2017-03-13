import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { apiUrl } from "../constants";


@Injectable()
export class ListService {
    CONNECTION_ERROR: string = "Es wurde ein Problem bei der Datenverbindung festegestellt. Bitte versuchen Sie es erneut.";
    baseUrl: string = apiUrl + '/beers';

    constructor(private http: Http) {
    }

    getBeer(): Promise<Array<any>> {
        return this.http.get(this.baseUrl + '?key=fbf7aa12110a12d0ec0a470368fca9b8&styleId=3')
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError.bind(this));
    }


    private handleError(error: any) {
        console.info(this.CONNECTION_ERROR);
        console.error(error);
        // if (error.status == 403) {
        //     this.warningService.showErrorMessage("PERMISSION_DENIED");
        // } else {
        //     this.warningService.showErrorMessage(this.CONNECTION_ERROR);
        // }
        //
        // return Promise.reject(error.message || error);
    }
}
