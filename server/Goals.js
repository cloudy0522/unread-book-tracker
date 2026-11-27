//독서 목표 구하는 함수
const getTodayGoals = (userId, today) => {
  //db 읽어서 calDailyGoals 호출
  //날짜가 바뀌었을 때만 새 goal을 구하도록
};

const calDailyGoals = ({ readingBooks, borrowedBooks, dailyCapacity }) => {
  /*
    readingBooks: 지금 읽고 있는 책
    borrowedBooks: 대출한 책(마감 기한이 있는 책) / 반납 기간이 지난 책은 없는걸로
    dailyCapacity: 하루에 읽을 수 있는 쪽수
     */
  //순서 구하기 -> 페이지 배정
  const bookSeq = [];
  /* 순서 구하기
    if borrowedBook.length === 0
        readingBooks.length === 0 -> 가장 오래 방치된 책부터
        else -> 최근에 읽은 것부터

    else
        // borrowedBooks를 기간 내에 다 읽을 수 있는가? 지금 읽는 책을 다 읽고 시작해도 되는가?
            마감일이 가까운 것이 먼저 오도록 정렬
            여유일수 = 0
            for book in borrowedBooks
                전체 남은 쪽수 += book의 남은 쪽수
                여유 일수 = min(여유 일수,
                book의 마감일까지의 일수 - 올림(전체 남은 쪽수 / daliyCapacity) 
            if 여유일수 > 지금 읽고 있는 책을 다 읽는 데 필요한 일수
                지금 읽고 있는 책부터
            else if 여유일수 >= 0
                마감일이 가까운 것부터
            else (기간 내에 다 읽을 수 없는 경우)
                페널티를 최소화하는 방법... (minimaize total tardiness)
                    <- 이거 NP라서 오래 걸리는데 한번에 책을 잔뜩 빌리는 사람은 없겠지...?
*/
  /*
  for book in bookSeq
    if book의 남은 쪽수 > 하루에 읽을 수 있는 쪽수
        목표 생성
        break
   */

    //return Goal[]
};
