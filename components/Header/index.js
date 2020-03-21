// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const header = document.createElement("div");
  const spanDate = document.createElement("span");
  const title = document.createElement("h1");
  const spanTemp = document.createElement("span");

  header.appendChild(spanDate);
  header.appendChild(title);
  header.appendChild(spanTemp);

  header.classList.add("header");
  spanDate.classList.add("date");
  spanTemp.classList.add("temp");

  spanDate.textContent = "SMARCH 28, 2019";
  title.textContent = "Lambda Times";
  spanTemp.textContent = "98°";

  return header;
}

const headerCont = document.querySelector(".header-container");
headerCont.appendChild(Header());
