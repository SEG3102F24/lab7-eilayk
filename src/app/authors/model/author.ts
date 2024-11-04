export class Author {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public books: BookTitle[]
  ){}
}

class BookTitle {
  constructor(
    public title: string
  ){}
}
