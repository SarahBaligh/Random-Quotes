var newQuoteBtn = document.getElementById("btn");
var newQuote = document.getElementById("newQuote");
var author = document.getElementById("author");

var Quotes = [
  {
    'quote' : "“Be yourself; everyone else is already taken.”",
    'author' : "--Oscar Wilde"
  },
  {
    'quote' : "“So many books, so little time.”",
    'author' : "--Frank Zappa"
  },
  {
    'quote' : "“A room without books is like a body without a soul.”",
    'author' : "--Marcus Tullius Cicero"
  },
  {
    'quote' :"“You only live once, but if you do it right, once is enough.”",
    'author' : "--Mae West"
  },
  {
    'quote' :"“Be the change that you wish to see in the world.”",
    'author' : "--Mahatma Gandhi" 
  },
  {
    'quote' : "“In three words I can sum up everything I've learned about life: it goes on.”",
    'author' : "--Robert Frost"
  },
  {
    'quote' :"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    'author' :  "--J.K. Rowling, Harry Potter and the Goblet of Fire"
  }
]

function generateQuote() {
  var random = Number(Math.floor(Math.random() * Quotes.length));
  newQuote.innerHTML = Quotes[random].quote;
  author.innerHTML = Quotes[random].author;
}
