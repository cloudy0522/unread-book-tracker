//독서 목표 구하는 함수
const getTodayGoals = (userId, today) => {
    //db 읽어서 calDailyGoals 호출
    //날짜가 바뀌었을 때만 새 goal을 구하도록 
}

const calDailyGoals = ({ readingBooks, borrowedBooks, dailyCapacity}) => {
    /*
    readingBooks: 지금 읽고 있는 책
    borrowedBooks: 대출한 책(마감 기한이 있는 책) / 반납 기간이 지난 책은 없는걸로
    dailyCapacity: 하루에 읽을 수 있는 쪽수
     */

    //a. borrowedBook.length === 0
    //  1. readingBooks.length === 0 -> 가장 오래 방치된 책부터
    //  2. else -> 최근에 읽은 순서로 정렬 후 페이지 배정

    //b. else borrowedBooks를 기간 내에 다 읽는 방법 구하기
    //  1. borrowedBooks를 기간이 가까운 순으로 정렬
    //  2. 
}