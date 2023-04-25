// start button
var startButton = document.getElementById('startButton');
// startpage - first page user sees
var startPage = document.getElementById('startPage');
// all questions on HTML
var questions = document.getElementsByClassName("question");
// each question
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');
var q5 = document.getElementById('q5');
// all buttons
var button = document.querySelectorAll('button');
var element
var state
// wrong answer button selected
var wrongA = document.getElementsByClassName ('wrong');

// timer div including status update for user if correct or wrong answer selected
var timerDiv = document.getElementById('timerDiv');
var timerEl = document.getElementById('timer');
var update = document.getElementById('update');

// form for user to see score and submit initials
var form = document.getElementById('finalForm');
// button to submit
var submitInitials = document.getElementById('submit');
// div displaying high scores
var highScores = document.getElementById('highScores');
// view high score button
var viewHighScore = document.getElementById('viewHighScore');
// user score based on answers selected
var score
var finalScore = document.getElementById('score');

// variables for timer
var timeLeft
var timeInterval 

// show user correct answer update if selected and clear after 2 seconds
function correctAnswer() {
    console.log("correct answer chosen");
    update.textContent = "Correct!";
    // clear message after two seconds
    setTimeout(function() {
        update.textContent = '';
    }, 2000);
}


// eventlistener to start button on first page
startButton.addEventListener('click', function () {
    // start timer
    timer();
    // clear score
    score = 0;
    console.log(score, "score");
    // show timer countdown
        timerDiv.style.display = "inline-block";
    // hide startpage
        startPage.style.display = "none";
    // show q1
        q1.style.display = "inline-block";
    // once user clicks a button answer choice for q1
    q1.addEventListener ('click', function (event) {
        element = event.target;
        if (element.matches("button")) {
            state = element.getAttribute("data-state");
        };
        // if they select the correct answer
        if (state === "correct") {
            q1.style.display = "none";
            q2.style.display = "inline-block";
            correctAnswer();
            score = score + 1;
            console.log(score, "score");
         } else {
            // console.log("incorrect answer chosen");
            q1.style.display = "none";
            q2.style.display = "inline-block";
            }
        });

    // if correct answer chosen, hide q2 and show q3
   q2.addEventListener ('click', function (event) {
        element = event.target;
        if (element.matches("button")) {
            state = element.getAttribute("data-state");
        };
        if (state === "correct") {
            q2.style.display = "none";
            q3.style.display = "inline-block";
            correctAnswer();
            score = score + 1;
            console.log(score, "score");
        } else {
            q2.style.display = "none";
            q3.style.display = "inline-block";
            }
        }
    );

    // if correct answer chosen, hide q3 and show q4
    q3.addEventListener ('click', function (event) {
        element = event.target;
        if (element.matches("button")) {
            state = element.getAttribute("data-state");
        };
        if (state === "correct") {
            q3.style.display = "none";
            q4.style.display = "inline-block";
            correctAnswer();
            score = score + 1;
            console.log(score, "score");
        } else {
            q3.style.display = "none";
            q4.style.display = "inline-block";
         }
        }
    );

   // if correct answer chosen, hide q4 and show q5
   q4.addEventListener ('click', function (event) {
     element = event.target
        if (element.matches("button")) {
             state = element.getAttribute("data-state");
        };
        if (state === "correct") {
            q4.style.display = "none";
            q5.style.display = "inline-block";
            correctAnswer();
            score = score + 1;
            console.log(score, "score");
        } else {
            q4.style.display = "none";
            q5.style.display = "inline-block";
    }
}
);

     // if correct answer chosen, hide q4 and show q5
   q5.addEventListener ('click', function (event) {
     element = event.target;
        if (element.matches("button")) {
             state = element.getAttribute("data-state");
        };
        if (state === "correct") {
            q5.style.display = "none"; 
            correctAnswer();
            score = score + 1;
            displayMessage();
            clearInterval(timeInterval);
            timerEl.textContent = '';
            console.log(score, "score");
        } else {
            q5.style.display = "none";
            displayMessage();
            clearInterval(timeInterval);
            timerEl.textContent = '';
        }    
    });
});

//  timer function
function timer() {
    var timeLeft = 120;
     timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = 'Time: ' + timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            // when timeleft =1, rename to second instead of seconds
            timerEl.textContent = 'Time: ' + timeLeft + ' second remaning'
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
         //  loop for wrong answer choices
            for (var i=0; i < wrongA.length; i++) {
                wrongA[i].addEventListener('click', function () {
                    timeLeft--;
                    update.textContent = "Wrong! Watch the timer...";
                    // clear message 
                    setTimeout(function() {
                        update.textContent = '';
                    }, 2000);
                    console.log("incorrect answer chosen");
                    console.log(score, "score");
                }) }
    },1000);
}

// final form
function displayMessage() {
    form.style.display = "inline-block";
    for (i=0; i < questions.length; i++) {
            questions[i].style.display = "none"; }
    timerDiv.style.display = "none";
    finalScore.textContent = "Your final score is " + score; 
};


var initials = document.getElementById('initials');
var highScoresList = document.getElementById('highScoresList');

function renderHighScore() {
    // get stored high scoes from localStorage
    var previousHighScores = JSON.parse(localStorage.getItem("highScores"));
    // append highscores to highscores element
    highScoresList.appendChild(previousHighScores);
}

// user clicks view high score button - can turn into function since use again when user submits initials
viewHighScore.addEventListener ('click', function() {
    highScores.style.display = "inline-block";
    timerDiv.style.display = "none";
    startPage.style.display = "none";
    form.style.display = "none";
    for (i=0; i<questions.length; i++) {
        questions[i].style.display = "none";
    }
});

// user clicks play again
var playAgain = document.getElementById('playAgain');
playAgain.addEventListener('click', function () {
    highScores.style.display = "none";
    startPage.style.display = "inline-block";
});

// user submits initials
submitInitials.addEventListener('click', function(event) {
    event.preventDefault();
    if (initials.value !== " ") {
        const item = document.createElement("li");
        item.textContent = initials.value + " Score: " + score
        highScoresList.appendChild(item);
        localStorage.setItem("highScores", JSON.stringify(item.textContent));
        // clear for next user?
        initials.value = "";
    }
    highScores.style.display = "inline-block";
    form.style.display = "none";
    timerDiv.style.display = "none";
});

// renderHighScore();