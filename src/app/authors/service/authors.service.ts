import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Author} from "../model/author";
import {Bio} from "../model/bio";
import {map} from "rxjs/operators";

const Url = 'http://localhost:8080/books-api/';
@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private http: HttpClient = inject(HttpClient);

  public getAuthor(id: string) {
    return this.http.get<Author>(Url + 'authors/' + id);
  }

  public getBio(id: string) {
    return this.http.get<Bio>(Url + 'authors/' + id + '/bio').pipe(map(bio => bio.biodata));
  }
}
