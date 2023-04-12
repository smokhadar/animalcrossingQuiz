// define variables
var questions = document.getElementsByClassName("question");
var startButton = document.getElementById('startButton');
var startPage = document.getElementById('startPage');
var q1 = document.getElementById('q1');

var wrongA = document.getElementsByClassName ('wrong');

var correctA1 = document.getElementById('correct1');
var correctA2 = document.getElementById('correct2');
var correctA3 = document.getElementById('correct3');
var correctA4 = document.getElementById('correct4');

var button = document.querySelectorAll('button');

// add eventlistener to start button
startButton.addEventListener('click', function () {

    // start timer

    // hide startpage
    if (startPage.style.display = "inline-block") {
        startPage.style.display = "none";
    }

    // show q1
    if (q1.style.display = "none") {
        q1.style.display = "inline-block";
    }

    // if correct answer chosen, hide q1 and show q2
    correctA1.addEventListener ('click', function () {
            console.log("correct answer chosen");
            if (q1.style.display = "inline-block") {
                q1.style.display = "none";
            }
            if (q2.style.display = "none") {
                q2.style.display = "inline-block";
             } } 
        );

    // if correct answer chosen, hide q2 and show q3
   correctA2.addEventListener ('click', function () {
        console.log("correct answer chosen");
        if (q2.style.display = "inline-block") {
            q2.style.display = "none";
        }
        if (q3.style.display = "none") {
            q3.style.display = "inline-block";
         } } 
    );

    // if correct answer chosen, hide q3 and show q4
    correctA3.addEventListener ('click', function () {
        console.log("correct answer chosen");
        if (q3.style.display = "inline-block") {
            q3.style.display = "none";
        }
        if (q4.style.display = "none") {
            q4.style.display = "inline-block";
         } } 
    );

   // if correct answer chosen, hide q4 and show q5
   correctA4.addEventListener ('click', function () {
    console.log("correct answer chosen");
    if (q4.style.display = "inline-block") {
        q4.style.display = "none";
    }
    if (q5.style.display = "none") {
        q5.style.display = "inline-block";
     } } 
);


});
    //  loop for wrong answer choices
    //  for (var i=0; i < wrongA.length; i++) {
    //     wrongA[i].addEventListener('click', function () {

    //     }) }


// create timer function
    // subtract time when answer wrong

// create form to submit name at end for leaderboard