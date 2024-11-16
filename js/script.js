const quotes = [
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best",
  },
  { author: "Frank Zappa", quote: "So many books, so little time." },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul",
  },
  {
    author: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
];

let lastIndex = -1;

function QuoteGenerator() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;

  const { quote, author } = quotes[randomIndex];

  const quoteOutput = document.querySelector("#outPut");
  const authorOutput = document.querySelector("#author");

  quoteOutput.textContent = `"${quote}"`;
  authorOutput.textContent = `--${author}`;
}

const btn = document.querySelector("#btn");
btn.onclick = QuoteGenerator;
