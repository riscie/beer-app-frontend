import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class BeerService {
    CONNECTION_ERROR: string = "Es wurde ein Problem bei der Datenverbindung festegestellt. Bitte versuchen Sie es erneut.";
    baseUrl: string = "http://localhost:8100/api";
    apiKey: string = '?key=fbf7aa12110a12d0ec0a470368fca9b8';

    constructor(private http: Http) {
    }

    getBeerByStyleId(styleId: number): Observable<any[]> {
        let query = `${this.baseUrl}/beers${this.apiKey}&styleId=${styleId}`;
        console.log(`GET: ${query}`);
        return this.http.get(query)
            .map((res: Response) => res.json())
            .catch(this.handleError.bind(this));
    }

    getBeerById(Id: string): Observable<any> {
        let query = `${this.baseUrl}/beer/${Id}${this.apiKey}`;
        console.log(`GET: ${query}`);
        return this.http.get(query)
            .map((res: Response) => res.json())
            .catch(this.handleError.bind(this));
    }

    handleError(error: any) {
        const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : this.CONNECTION_ERROR;
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
