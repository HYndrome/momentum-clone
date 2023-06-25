const clockDate = document.querySelector("#clock-date");
const clockTime = document.querySelector("#clock-time");

function clockHandler() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();
  const dayArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dayEnglish = dayArray[day];
  const hour = String(today.getHours()).padStart(2, 0);
  const minute = String(today.getMinutes()).padStart(2, 0);
  const second = String(today.getSeconds()).padStart(2, 0);
  clockDate.innerText = `${year}년 ${month}월 ${date}일 [${dayEnglish}]`;
  clockTime.innerText = `${hour}:${minute}:${second}`;
}

clockHandler();
setInterval(clockHandler, 1000);
