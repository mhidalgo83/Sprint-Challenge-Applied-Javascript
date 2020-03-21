/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const CardCarousel = cur => {
  const carousel = document.createElement("div");
  const lftBtn = document.createElement("div");
  const img = document.createElement("img");
  const rtBtn = document.createElement("div");

  carousel.classList.add("carousel");
  lftBtn.classList.add("left-button");
  img.src = `./assets/carousel/${imgArr[cur]}.jpeg`;
  rtBtn.classList.add("right-button");

  carousel.appendChild(lftBtn);
  carousel.appendChild(img);
  carousel.appendChild(rtBtn);

  lftBtn.addEventListener("click", () => {
    cur -= 1;
    if (cur < 0) {
      cur = 3;
    }
    console.log(imgArr[cur]);
    return img.src = `./assets/carousel/${imgArr[cur]}.jpeg`;;
  });

  rtBtn.addEventListener("click", () => {
    cur += 1;
    if (cur > 3) {
      cur = 0;
    }
    console.log(imgArr[cur]);
    return img.src = `./assets/carousel/${imgArr[cur]}.jpeg`;;
  });

  return carousel;
};

const imgArr = ["mountains", "computer", "trees", "turntable"];

const carouselCont = document.querySelector(".carousel-container");
const cur = 0;
console.log(cur);
carouselCont.appendChild(CardCarousel(cur));
