// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res => {
  //Store each set of articles in separate arrays
  const jsArticles = res.data.articles.javascript;
  const bootstrapArticles = res.data.articles.bootstrap;
  const techArticles = res.data.articles.technology;
  const jqueryArticles = res.data.articles.jquery;
  const nodeArticles = res.data.articles.node;

  //Combine all arrays together
  const artArray = [
    ...jsArticles,
    ...bootstrapArticles,
    ...techArticles,
    ...jqueryArticles,
    ...nodeArticles
  ];
  console.log(artArray);

  //Select .cards-container
  const cardsCont = document.querySelector(".cards-container");

  //Use artArray to dynamically create components
  artArray.forEach(el => {
    const newCard = articleComp(el);
    cardsCont.appendChild(newCard);
  });
});

//Function to create article component
const articleComp = data => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("div");
  const authImg = document.createElement("img");
  const authName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");
  authImg.src = data.authorPhoto;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(authImg);
  author.appendChild(authName);

  headline.textContent = data.headline;
  authName.textContent = data.authorName;

  console.log(card);
  return card;
};
