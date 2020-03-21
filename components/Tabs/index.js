// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get("https://lambda-times-backend.herokuapp.com/topics").then(res => {
  const tabData = res.data;
  const topic = document.querySelector(".topics");
  tabData.topics.forEach(el => {
    topic.appendChild(lambdaTab(el));
  });
});

const lambdaTab = data => {
  const newTab = document.createElement("div");
  newTab.classList.add("tab");
  newTab.textContent = data;
  return newTab;
};
