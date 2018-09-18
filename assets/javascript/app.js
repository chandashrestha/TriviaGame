var time = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var serialNumber = 0;
// no need for a value as it is a object variable
var intervalId;

var questionsArray = [
  "What is the capital of Nepal?",
  "What is the animal who helps people to carry so many things on the high paths of Nepal?",
  "What is the name of the famous street in Kathmandu, where the first hippies lived in the 60's and 70's?",
  "What is the currency used in Nepal?",
  "What country borders Nepal to the south?",
  "Of the ten highest mountain peaks in the world, how many can be found in Nepal?",
  "Nepal has two main religions in the country, which are followed by most of people. What are they?",
  "In which script is Nepali written?",
  "The 10th Annual CNN Superhero is?",
  "When did Nepalese Royal Massacre occur?"
];

var answersArray = [
  ["Kathmandu", "Pokhara", "New-Delhi", "Dhaka"],
  ["Himalayan Tahr", "Tibetan fox", "YAK", "One horned rhinoceros"],
  ["Jhamel", "Freak Street", "Lakeside", "Thamel"],
  ["Yen", "Taka", "Won", "Rupee"],
  ["BHUTAN", "INDIA", "CHINA", "BANGALDESH"],
  ["9", "7", "10", "8"],
  [
    "Muslim and Hindusim",
    "Hinduism and Buddhism",
    "hinduism and Christianity",
    "Buddhism and Christianity"
  ],
  ["Devanagari", "Nepali", "Sanskrit", "Hindi"],
  [
    "Girija Koirala",
    "Pushpa Basnet",
    "Anuradha Koirala",
    "Pasang Lhamu Sherpa"
  ],
  ["2004", "2003", "2002", "2001"]
];

$("#start").on("click", start);

function start() {
  // hides the start button
  $("#start").hide();
  //time needs to be called before the set of question appears
  timeStarter();
  //a set of a question and 4 possible answer
  qaset();
}

function timeStarter() {
  intervalId = setInterval(decrement, 1000);

  function decrement() {
    if (time === 0) {
      clearInterval(intervalId);
      <span>you are out of time!!!</span>
    } else if (time > 0) {
      //decrease number by one
      time--;
    }
    $(".timer").html(time);
  }
}
