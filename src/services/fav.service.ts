import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class FavService {
    CONNECTION_ERROR: string = "Es wurde ein Problem bei der Datenverbindung festegestellt. Bitte versuchen Sie es erneut.";
    baseUrl: string = "http://localhost:3000/favorites";

    constructor(private http: Http) {
    }

    getAllFavorites(): Observable<any[]> {
        let query = `${this.baseUrl}`;
        console.log(`GET: ${query}`);
        return this.http.get(query)
            .map((res: Response) => res.json())
            .catch(this.handleError.bind(this));
    }

    addFavorite(beer: any): Observable<any> {
        let query = `${this.baseUrl}`;
        console.log(`POST: ${query}`);
        return this.http.post(query, beer)
            .map((res: Response) => res.json())
            .catch(this.handleError.bind(this));
    }

    deleteFavorite(id: string): Observable<any> {
        let query = `${this.baseUrl}/${id}`;
        console.log(`DELETE: ${query}`);
        return this.http.delete(query)
            .map((res: Response) => res.json())
            .catch(this.handleError.bind(this));
    }

    handleError(error: any) {
        const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : this.CONNECTION_ERROR;
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
