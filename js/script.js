const arrayOfQuotes = [
  {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
  },
  {
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success." },
  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
];

let lastIndex = -1;

function generateQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * arrayOfQuotes.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;

  const { quote, author } = arrayOfQuotes[randomIndex];

  const quoteOutput = document.querySelector("#quoteOutput");
  const authorOutput = document.querySelector("#authorOutput");

  quoteOutput.textContent = `"${quote}"`;
  authorOutput.textContent = `--${author}`;
}

const btn = document.querySelector("#btn");
btn.onclick = generateQuote;
