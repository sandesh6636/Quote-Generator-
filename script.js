const qoute = document.querySelector("#quote-write");
const btn = document.querySelector(".button-23");

// console.log(btn);
// console.log(qoute);

const qoutesArray = [
  "Today is a new beginning, a chance to turn your dreams into reality.",
  "Wake up with determination, go to bed with satisfaction.",
  "Every morning is a blank canvas... it's up to you how you want to paint it.",
  "Embrace the day with a grateful heart and watch the magic unfold.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "As you close your eyes tonight, remember that you are loved, you are worthy, and tomorrow holds new possibilities.",
  "Reflect on the moments that made you smile today, for they are the ones worth cherishing.",
  "Let go of today's worries, tomorrow is a new chance to make things right.",
  "End your day with a grateful heart, for even the smallest blessings are worth celebrating.",
  "Tomorrow is a new chapter, but tonight, let's just be grateful for the journey so far.",
  "The only way to achieve the impossible is to believe it is possible.",
  "Your time is limited, don't waste it living someone else's life.",
  "Success is not just about what you accomplish, but what you inspire others to do.",
  "Difficult roads often lead to beautiful destinations.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The journey of a thousand miles begins with one step.",
  "Dream big and dare to fail.",
  "Don't watch the clock; do what it does. Keep going.",
  "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
  "Believe you can and you're halfway there.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Every accomplishment starts with the decision to try.",
  "You don't have to be great to start, but you have to start to be great.",
  "Be the change you wish to see in the world.",
  "The only way to do great work is to love what you do.",
  "Don't count the days, make the days count.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
];

const colorArray = [
  "#AFA2FF",
  "#7A89C2",
  "#7A89C2",
  "#F9E7E7",
  "#7D938A",
  "#175676",
  "#CCE6F4",
  "#2F2D2E",
];
btn.addEventListener("click", () => {
  qoute.innerHTML = giveQuote();
  qoute.style.color = randColor();
  console.log(qoutesArray.indexOf(giveQuote));
});

const giveQuote = () => {
  const randNumber = Math.floor(Math.random() * 28);
  return qoutesArray[randNumber];
};
const randColor = () => {
  const someColor = Math.floor(Math.random() * 8);
  return colorArray[someColor];
};
