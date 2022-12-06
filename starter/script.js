/* 
Questions

1) Inside which HTML element do we put the JavaScript? 
<script>     <js>     <javascript>   <scripting>

2) Where is the correct place to insert a JavaScript? 
<body>       <head>             Both <head> and <body>

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


// Timer

   var myVar = setInterval(myTimer, 1000);

 var time = 60;

    function myTimer() {
        time--;  
        // got to clear the function 
        if (time <= 0) {
            clearInterval(myVar);
        }
        document.getElementById("time").innerHTML = time;

     }

     // need event listner for click button 

// when start clicked --> first question pops up
     document.getElementById("start").addEventListener("click", firstQuestion);

    function firstQuestion () {
     document.getElementById("title").innerHTML = "1) Inside which HTML element do we put the JavaScript?";
    }

    