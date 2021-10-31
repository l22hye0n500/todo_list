const quotes = [
  {quote:"I just wanted to take another look at you  ▼",
   author:" -A star is born",},
  {quote:"The greatest thing you'll ever learn is just to love and be loved in return  ▼",
  author:" -Moulin Rouge",},
  {quote:"It's only after we've lost everything that we're free to do anything  ▼",
  author:"-Fight Club, Tyler Durben",},
  {quote:"It is not our abilities that show what we truly are, it is our choices  ▼",
  author:" -Dumbledore, Harry Potter",},
  {quote:"The past can hurt, but you can either run from it, or learn from it  ▼",
  author:"-Lion King",},
  {quote:"If we didn't do what we loved, we wouldn't exist  ▼",
  author:" -Adonis",},
  {quote:"At some point you've got to decide for yourself who you gonna be. Can't let nobody make that decision for you  ▼",
  author:"-Juan, Moonlight",},
  {quote:"Every man dies, not every man really lives  ▼",
  author:"-Braveheart",},
  {quote:"Ideals are peaceful, history is violent  ▼",
  author:"-Don Collier, Fury",},
  {quote:"There's no place like home  ▼",
  author:"-The Wizard of Oz",},
]

const quote =  document.querySelector("#quote span:first-child")
const author =  document.querySelector("#quote span:last-child")

const randomQuotes = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = randomQuotes.quote
author.innerText = randomQuotes.author



$( quote ).click( function() {
  $( author ).slideToggle();
} );


$( '#christcount' ).click( function() {
  $( '#count' ).slideToggle();
} );
