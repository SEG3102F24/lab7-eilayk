import {Component, inject} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Author} from "./model/author";
import {AuthorsService} from "./service/authors.service";
import {concatMap, switchMap} from "rxjs";

interface AuthorWrapper {
  author: Author | null;
  initial: boolean;
  bio: string;
}

@Component({
  selector: 'app-authors',
  standalone: true,
  templateUrl: './authors.component.html',
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  author: AuthorWrapper;
  authorService = inject(AuthorsService);
  constructor() {
    this.author = { author: null, bio: "", initial: true };
  }
  submit(id: string) {
    this.author.initial = false;
    this.author.author = null;
    this.author.bio = "";
    this.authorService.getAuthor(id).pipe(
      concatMap(author => {
        this.author.author = author;
        return this.authorService.getBio(id);
      })
    ).subscribe(bio => this.author.bio = bio);
  }
}
