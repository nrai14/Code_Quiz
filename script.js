/* 
Questions

1) Inside which HTML element do we put the JavaScript? 
<script>     <js>     <javascript>   <scripting>

2) Where is the correct place to insert a JavaScript? 
<body>       <head>     <main>>        Both <head> and <body>

3) Which event occurs when the user clicks on an HTML element? 
onclick         onmouseover         onmouseclick            onchange 

*/

//Pseudo code

/* Opening page will have:

Start button


When START is clicked = timer starts + first question
    Answer chosen? Correct = sound --> next question. Wrong = sound --> timer down by 10 seconds + next question
        Continue until all questions answered or timer goes to 0
    Results then shown with final score 
        Option to write initials --> Submit on leaderboard --> also option to clear

*/
var questions = [
  {
    prompt: "Inside which HTML element do we put the JavaScript",
    answer: "<script>",
    choices: ["<script>", "<js>", "<javascript>", "<scripting>"],
  },
  {
    prompt: "Where is the correct place to insert a JavaScript?",
    answer: "<body>",
    choices: ["<body>", "<head>", "<main>", "Both <head> and <body>"],
  },
  {
    prompt: "Which event occurs when the user clicks on an HTML element?",
    answer: "onclick",
    choices: ["onclick", "onmouseover", "onmouseclick", "onchange"],
  },
];

var arr = [0, 7, 6, 3]
 console.log(arr[1])

// Storing the questions
// If you don't store in an array, won't know when to write question on page
// Reference array with index to change to the next question - integers to progress through the array

// Build a question counter variable
// Purpose of this is to keep track of which question to render on the page
// Store all questions in one place (array), the question counter serves as the index position of the array
// Start at 0? First posiition of array
// You can choose to increment the question coutner on an event, like selecting a resonse ption
// Similar time counter

// Timer
var questionIndex = 0

var time = 60;

// logic ahead of displayquestion if question index does not equal questions.length then continue showing display question or take them to highscores/end quiz

// need event listner for click button

// when start clicked --> first question pops up
document.getElementById("start").addEventListener("click", startQuiz);

function startQuiz(event) {
  //seeting the ground for showing question
  event.preventDefault();
  var myVar = setInterval(myTimer, 1000);

  function myTimer() {
  time--;
  // got to clear the function
  if (time <= 0) {
    clearInterval(myVar);
  }
  document.getElementById("time").innerHTML = time;
}
  console.log("Starting quiz");
  var startScreen = document.getElementById('start-screen')
  console.log(startScreen)
  console.log(document.getElementById('start-screen'))
  startScreen.classList.add("hide")
  document.getElementById('questions').classList.toggle("hide")
  displayQuestion();
}

function displayQuestion() {
  console.log("Displaying questions!");
    // target the question element for our prompt and set the text content to our current question's prompt
    var promptHolder = document.getElementById('question-title')

    // Below chooses answer
    console.log(questions[questionIndex].answer)

    console.log(questions[0].answer)

    

    promptHolder.textContent = questions[questionIndex].prompt
    for(let i=0; i < questions[questionIndex].choices.length; i++){
        //create a button
        //add the text 
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.textContent = questions[questionIndex].choices[i]; // accessing position in array, need integar
      li.append(btn);
      document.getElementById('choices').append(li);
      // li - putting btn inside it 
        //
    }

    document.getElementById('choices').addEventListener("click", function (event) {
      console.log(event.target.innerText);

      if (event.target.innerText === questions[questionIndex].answer) {
        console.log("Correct!");

        var correct = new Audio('./starter/assets/sfx/correct.wav');
        correct.play();
        console.log(questionIndex);
        nextQuestion();
      }
      else {
        var wrong = new Audio('./starter/assets/sfx/incorrect.wav');
        wrong.play();
        console.log(questionIndex);
        nextQuestion();
      }
    })
 
}

function nextQuestion() {
  questionIndex++;
  // var nextQ = document.
  document.getElementById('choices').innerHTML = "";
  // explore how to remove descendents after selecting then use remove()
  // nextQ.remove();
  displayQuestion();
}



// function checkAnswer(event){
//     event.preventDefault()
//     console.log(event.target)
// }


// button
// Change innerhtml to be nothing for p tag
// final element button --> group together iwth an unoredered list
// put elements together (four button elements)
// button answers need to be kept in the JS side, and then append them onto the page
//


// list
// button
// write choice 1, 2, 3 whatever etc 


/* NEXT STEPS
need validate function (+1) 
  VALIDATE WHAT USER CLICKED = DETERMINE IF CORRECT OR NOT
  INCORRECT = DECREMENT TIME (PRESET VALUE - 10 SECONDS)

  

  LOCAL STORAGE - HIGH SCORE 
    KEY VALUE PAIR (TO BE STORED) --> USER'S INPUT WITH SCORE ACHIEVED 
      OBJECT 

*/

// Issue with next question not coming up/ sound of second question plays both right and wrong noise

// Testing testing 

//blah bla