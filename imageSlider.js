const mainSlide = document.querySelector(".main-slide");
const container=document.querySelector(".container");
const sidebar=document.querySelector(".sidebar");
const up = document.querySelector(".up-button");
const down = document.querySelector(".down-button");

let upAndDown = 0;
const pictures = mainSlide.querySelectorAll(".slide").length;

mainSlide.style.top=`-${(pictures-1)*100}vh`

const change = (direction) => {
  if (direction === "up") {
    upAndDown ++;

    if (upAndDown === pictures) {
      upAndDown = 0;
    }
  }

  if (direction === "down") {
    upAndDown --;

    if (upAndDown < 0) {
      upAndDown = pictures - 1;
    }
  }

  let height = container.clientHeight;

  mainSlide.style.transform = `translateY(${height * upAndDown}px)`;
  sidebar.style.transform = `translateY(-${height * upAndDown}px)`;
};

up.addEventListener("click", () => {
  change("up");
});

down.addEventListener("click", () => {
  change("down");
});


