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
  //Creating carousel elements
  const carousel = document.createElement("div");
  const lftBtn = document.createElement("div");
  const img = document.createElement("img");
  const rtBtn = document.createElement("div");

  //Adding class and src attributes
  carousel.classList.add("carousel");
  lftBtn.classList.add("left-button");
  img.src = `./assets/carousel/${imgArr[cur]}.jpeg`;
  rtBtn.classList.add("right-button");

  //Appending elements to carousel element
  carousel.appendChild(lftBtn);
  carousel.appendChild(img);
  carousel.appendChild(rtBtn);

  //Left button event listener
  lftBtn.addEventListener("click", () => {
    //Cur is current array index of imgArr
    cur -= 1;
    //If cur is less than 0, set cur to 3
    if (cur < 0) {
      cur = 3;
    }
    console.log(imgArr[cur]);
    //Returns new image based on array index
    return (img.src = `./assets/carousel/${imgArr[cur]}.jpeg`);
  });

  //Right button event listener
  rtBtn.addEventListener("click", () => {
    //Cur is current array index of imgArr
    cur += 1;
    //If cur is greater than 3, set cur to 0
    if (cur > 3) {
      cur = 0;
    }
    console.log(imgArr[cur]);
    //Returns new image based on array index
    return (img.src = `./assets/carousel/${imgArr[cur]}.jpeg`);
  });

  //Returns component
  return carousel;
};

//Array based of unique name of each jpeg in carousel folder
const imgArr = ["mountains", "computer", "trees", "turntable"];

//Stores carousel container in variable, sets cur to 0 (beginning of array), and passes that into the CardCarousel function
const carouselCont = document.querySelector(".carousel-container");
const cur = 0;
console.log(cur);
carouselCont.appendChild(CardCarousel(cur));
