let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener






  // Part 1
  function shortenPageTitle() {
    document.getElementById("main-title").innerHTML = "Doms Page";
  }
  shortenPageTitle();








  // Part 2

  function changeBodyBgColor() {
  document.body.style.background = "#add8e6";
  };

changeBodyBgColor();








  // Part 3

  function removeLastFavoriteThing() {
    var favoriteList = document.getElementById('favorite-things');
    var staringPeopleDown = favoriteList.children[5];
    favoriteList.removeChild(staringPeopleDown);
  };

removeLastFavoriteThing();








  // Part 4
  function makeSpecialTitlesBigger() {
     document.getElementById("main-title").style.fontSize = "4em";
  };

makeSpecialTitlesBigger();









  // Part 5
  function RemoveChicagoRace() {
var pastRace = document.getElementById('past-races');
var chicago = pastRace.children[3];
pastRace.removeChild(chicago);
  };

RemoveChicagoRace();







  // Part 6
  function addPastRace() {
    var addRace = document.createElement("LI");
    var newCity = document.createTextNode("Mexico");
    addRace.appendChild(newCity);
    document.getElementById("past-races").appendChild(addRace);
};
addPastRace();







  // Part 7
  // function createNewBlogPost() {
  //  var newDiv = document.createElement('div');
  //  newDiv = className= 'blog-post';
  // newDiv.setAttribute('class', "blog-post purple");
  // var newDiveText = document.createTextNode('Mexico');
  // newDiv.appendChild(newDivText);

  // var newPost =document.querySelector('main .special-title);
  // var h1 = document.querySelector('main newPost');
  // };

});
createNewBlogPost();