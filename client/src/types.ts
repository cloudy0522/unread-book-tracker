export type Book = {
  title: string;
  author: string;
  isbn: string;
  coverUrl: string;
  totalPages: number;
  currentPage: number;
  readingStatus: string; //unread, reading, finished, abandoned
  acquiredDate?: Date; //대출/구매/등록 날짜
  dueDate?: Date; //대출 도서 반납기한
  rate?: number;
};

export type Goal = {
  id: string;
  book: Book;
  fromPage: number;
  toPage: number;
  currentPage: number;
  done: boolean;
};
