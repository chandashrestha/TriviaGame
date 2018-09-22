var time = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var serialNumber = 0;
// no need for a value as it is a object variable
var intervalId;

var quesAnsArray = [
  {
    question: "What is the capital of Nepal?",
    answers: ["Kathmandu", "Pokhara", "New-Delhi", "Dhaka"],
    correct: "Kathmandu"
  },
  {
    question:
      "What is the animal who helps people to carry so many things on the high paths of Nepal?",
    answers: ["Himalayan Tahr", "Tibetan fox", "YAK", "One horned rhinoceros"],
    correct: "YAK"
  },
  {
    question:
      "What is the name of the famous street in Kathmandu, where the first hippies lived in the 60's and 70's?",
    answers: ["Jhamel", "Freak Street", "Lakeside", "Thamel"],
    correct: "Freak Street"
  },

  {
    question: "What is the currency used in Nepal?",
    answers: ["Yen", "Taka", "Won", "Rupee"],
    correct: "Rupee"
  },
  {
    question: "What country borders Nepal to the south?",
    answers: ["BHUTAN", "INDIA", "CHINA", "BANGALDESH"],
    correct: "INDIA"
  },
  {
    question:
      "Of the ten highest mountain peaks in the world, how many can be found in Nepal?",
    answers: ["9", "7", "10", "8"],
    correct: "8"
  },
  {
    question:
      "Nepal has two main religions in the country, which are followed by most of people. What are they?",
    answers: [
      "Muslim and Hindusim",
      "Hinduism and Buddhism",
      "Hinduism and Christianity",
      "Buddhism and Christianity"
    ],
    correct: "Hinduism and Buddhism"
  },
  {
    question: "In which script is Nepali written?",
    answers: ["Devanagari", "Nepali", "Sanskrit", "Hindi"],
    correct: "Devanagari"
  },
  {
    question: "The 10th Annual CNN Superhero is?",
    answers: [
      "Girija Koirala",
      "Pushpa Basnet",
      "Anuradha Koirala",
      "Pasang Lhamu Sherpa"
    ],
    correct: "Pushpa Basnet"
  },
  {
    question: "When did Nepalese Royal Massacre occur?",
    answers: ["2004", "2003", "2002", "2001"],
    correct: "2001"
  }
];

var option = ["a.","b.","c.","d."];

$("#start").on("click", function(event) {
  // hides the start button
  $("#start").hide();
  //time needs to be called before the set of question appears
  timeStarter();
  //a set of a question and 4 possible answer
  qaset();
});

function timeStarter() {
  intervalId = setInterval(decrement, 1000);

  function decrement() {
    if (time === 0) {
      clearInterval(intervalId);
      timeOver();
    } else if (time > 0) {
      //decrease number by one
      time--;
    }
    $(".timer").html(time);
  }
}

function contentBuild() {
  $(".maincontent").empty();

  $(".maincontent").append($("<h2 id='timeR'>"));
  $("<h2>").addClass("text-center timer-p");
  $("#timeR").append($("<span class='timer'>"));
  $(".timer").html(time);
}

function qaset() {
  console.log(serialNumber);
  contentBuild();

  $(".maincontent").append(
    $(
      "<h3 class='text-center'>" + quesAnsArray[serialNumber].question + "</h3>"
    )
  );

  for (var i = 0; i < 4; i++) {
    $(".maincontent").append(
      $(
        "<h3 class='answer'>" +
          option[i] +
          " " +
          quesAnsArray[serialNumber].answers[i] +
          "</h3>"
      )
    );
  }
  console.log(serialNumber);
}

function timeOver() {
  unanswered++;

  contentBuild();

  $(".maincontent").append(
    $("<h3 class='text-center'> You ran out of time!</h3>")
  );
  $(".maincontent").append(
    $(
      "<h3>The correct answer is: " +
        quesAnsArray[serialNumber].correct +
        "</h3>"
    )
  );

  setTimeout(hault, 2000);
}

$("body").on("click", ".answer", function(event) {
  //player choice is userChoice
  var userChoice = $(this).text();
  //chooses the answer
  //var c = "a. chanda"
  //c.substring(3)=chanda
  var userAnswer = userChoice.substring(userChoice.indexOf(".") + 2);
  console.log(userChoice);
  console.log(quesAnsArray[serialNumber].correct);
  console.log(userAnswer);

  if (userAnswer === quesAnsArray[serialNumber].correct) {
    showCorrect();
  } else {
    showIncorrect();
  }
  clearInterval(intervalId);
});

function showCorrect() {
  correct++;
  contentBuild();

  $(".maincontent").append(
    $(
      "<h3 class='text-center'>Correct! The answer is: " +
        quesAnsArray[serialNumber].correct +
        "</h3>"
    )
  );

  setTimeout(hault, 2000);
}

function showIncorrect() {
  incorrect++;
  contentBuild();

  $(".maincontent").append(
    $(
      "<h3 class='text-center'>Incorrect! The correct answer is: " +
        quesAnsArray[serialNumber].correct +
        "</h3>"
    )
  );

  setTimeout(hault, 2000);
}

function hault() {
  if (serialNumber < 9) {
    serialNumber++;
    qaset();
    time = 30;
    timeStarter();
  } else {
    gameOver();
  }
}

function gameOver() {
  contentBuild();

  $(".maincontent").append($("<h3>Correct Answers: " + correct + "</h3>"));
  $(".maincontent").append($("<h3>Incorrect Answers: " + incorrect + "</h3>"));
  $(".maincontent").append(
    $("<h3>Unanswered Answers: " + unanswered + "</h3>")
  );
  $(".maincontent").append(
    $(
      "<button type='button' class='btn btn-secondary' id='reset'>Start Over?</button>"
    )
  );
}

$("body").on("click", "#reset", function() {
  correct = 0;
  incorrect = 0;
  unanswered = 0;
  serialNumber = 0;
  intervalId;
  time = 30;
  timeStarter();
  qaset();
});
