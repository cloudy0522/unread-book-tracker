export type Book = {
  title: string;
  author: string;
  isbn: string;
  coverUrl?: string;
  totalPages: number;
  currentPage: number;
  readingStatus: string; //reading, abandoned, (unread, finished <- 쪽수 보면 알 수 있긴 함...)
  acquiredDate?: Date; //대출/구매/등록 날짜
  dueDate?: Date; //대출 도서 반납기한
  rate?: number;
};

export type Goal = {
  id: string;
  book: Book;
  fromPage: number;
  toPage: number;
  done: boolean;
};
