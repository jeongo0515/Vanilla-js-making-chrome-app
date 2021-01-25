const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;  
        /* ? 는 if를 : 는 else를 뜻함(만약 초가 10보다 작으면 앞에 0을 표시해서 반환,
         10보다 크면 그냥 반환) */
}

function init() {
    getTime();
    setInterval(getTime, 1000);  // 1000밀리세컨(1초)마다 함수를 호출
}

init();