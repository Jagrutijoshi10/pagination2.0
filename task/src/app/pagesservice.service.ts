import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class PagesserviceService {
  constructor(private _http: HttpClient) {}

  getuser(start, end) {
    return this._http.get(
      `http://localhost:3000/getuser?start=${start}&end=${end}`,
      {}
    );
  }
}
