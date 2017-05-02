import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { TreeNode } from "primeng/primeng";


@Injectable()
export class DiscoverService {
    baseUrl: string = "http://localhost:8100/assets/json/discover.data.json";


    constructor(private http: Http) {
    }

    getData() {
        return this.http.get(this.baseUrl)
            .toPromise()
            .then(res => <TreeNode[]> res.json().data);
    }

}
