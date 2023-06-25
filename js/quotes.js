const quotes = [
  {
    quote:
      "그대 자신의 영혼을 탐구하라.다른 누구에게도 의지하지 말고 오직 그대 혼자의 힘으로 하라. 그대의 여정에 다른 이들이 끼어들지 못하게 하라. 이 길은 그대만의 길이요, 그대 혼자 가야할 길임을 명심하라. 비록 다른 이들과 함께 걸을 수는 있으나 다른 그 어느 누구도 그대가 선택한 길을 대신 가줄 수 없음을 알라",
    author: "인디언 속담",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할 것이다",
    author: "파울로 코엘료",
  },
  {
    quote:
      "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다",
    author: "헬렌켈러",
  },
  {
    quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
    author: "엘사 맥스웰",
  },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author: "L.론허바드",
  },
  {
    quote: "모든 사람에게 사랑 받을 필요는 없다",
    author: "니체",
  },
  {
    quote:
      "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다",
    author: "괴테",
  },
  {
    quote: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라",
    author: "마크 트웨인",
  },
  {
    quote:
      "해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다",
    author: "톨스토이",
  },
  {
    quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오",
    author: "헬렌 켈러",
  },
];
const quoteContainer = document.querySelector("#quotes p:first-child");
const authorContainer = document.querySelector("#quotes p:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quoteContainer.innerText = todaysQuote.quote;
authorContainer.innerText = ` - ${todaysQuote.author}`;
