// define variables
var questions = document.getElementsByClassName("question");
var startButton = document.getElementById('startButton');
var startPage = document.getElementById('startPage');
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');
var q5 = document.getElementById('q5');

var timerEl = document.getElementById('timer');
var update = document.getElementById('update');

var wrongA = document.getElementsByClassName ('wrong');

var form = document.getElementById('finalForm');
var finalScore = document.getElementById('score');

var button = document.querySelectorAll('button');

var score
var timeLeft

var timeInterval 

function correctAnswer() {
update.textContent = "Correct!";
// clear message after two seconds
setTimeout(function() {
    update.textContent = '';
}, 2000);
}

// add eventlistener to start button
startButton.addEventListener('click', function () {

    // start timer
    timer();

    // clear score
    var score = 0;

    // show timer countdown
    if (timerEl.style.display = "none") {
        timerEl.style.display = "inline-block";
    }

    // hide startpage
    if (startPage.style.display = "inline-block") {
        startPage.style.display = "none";
    }

    // show q1
    if (q1.style.display = "none") {
        q1.style.display = "inline-block";
    }

    q1.addEventListener ('click', function (event) {
        var element = event.target

        if (element.matches("button")) {
            var state = element.getAttribute("data-state")
        };

        if (state === "correct") {
            console.log("correct answer chosen");
            if (q1.style.display = "inline-block") {
                q1.style.display = "none";
            }
            if (q2.style.display = "none") {
                q2.style.display = "inline-block";
             } 
             score++;
             correctAnswer();
            } else {
                console.log("incorrect answer chosen");
            if (q1.style.display = "inline-block") {
                q1.style.display = "none";
            }
            if (q2.style.display = "none") {
                q2.style.display = "inline-block";
             } 
            }
        });

    // if correct answer chosen, hide q2 and show q3
   q2.addEventListener ('click', function (event) {
        var element = event.target

        if (element.matches("button")) {
            var state = element.getAttribute("data-state")
        };

    if (state === "correct") {
        console.log("correct answer chosen");
        if (q2.style.display = "inline-block") {
            q2.style.display = "none";
        }
        if (q3.style.display = "none") {
            q3.style.display = "inline-block";
         } 
         score++;
         correctAnswer();
        } else {
            console.log("incorrect answer chosen");
            if (q2.style.display = "inline-block") {
                q2.style.display = "none";
            }
            if (q3.style.display = "none") {
                q3.style.display = "inline-block";
             } 
        }
    }
    );

    // if correct answer chosen, hide q3 and show q4
    q3.addEventListener ('click', function (event) {
        var element = event.target

        if (element.matches("button")) {
            var state = element.getAttribute("data-state")
        };

    if (state === "correct") {
        console.log("correct answer chosen");
        if (q3.style.display = "inline-block") {
            q3.style.display = "none";
        }
        if (q4.style.display = "none") {
            q4.style.display = "inline-block";
         } 
         score++;
         correctAnswer();
        } else {
            console.log("incorrect answer chosen");
            if (q3.style.display = "inline-block") {
                q3.style.display = "none";
            }
            if (q4.style.display = "none") {
                q4.style.display = "inline-block";
             } 
        }
        }
    );

   // if correct answer chosen, hide q4 and show q5
   q4.addEventListener ('click', function (event) {
    var element = event.target

        if (element.matches("button")) {
            var state = element.getAttribute("data-state")
        };

    if (state === "correct") {
    console.log("correct answer chosen");
    if (q4.style.display = "inline-block") {
        q4.style.display = "none";
    }
    if (q5.style.display = "none") {
        q5.style.display = "inline-block";
     } 
     score++;
     correctAnswer();
    } else {
        console.log("incorrect answer chosen");
        if (q4.style.display = "inline-block") {
            q4.style.display = "none";
        }
        if (q5.style.display = "none") {
            q5.style.display = "inline-block";
         } 
    }
}
);

     // if correct answer chosen, hide q4 and show q5
   q5.addEventListener ('click', function (event) {
    var element = event.target

        if (element.matches("button")) {
            var state = element.getAttribute("data-state")
        };

    if (state === "correct") {
    console.log("correct answer chosen");
    if (q5.style.display = "inline-block") {
        q5.style.display = "none";
        score++;
        correctAnswer();
        displayMessage();
        clearInterval(timeInterval);
        timerEl.textContent = '';
    }} else {
        console.log("incorrect answer chosen");
        q5.style.display = "none";
        displayMessage();
        clearInterval(timeInterval);
        timerEl.textContent = '';
    }
    // not calculating score?? check miniproject example
     // once finished, display final screen, clear timer, and remove timer countdown
        }
    );
});

// change code so next question present if ANY answer chosen


//  timer function
function timer() {
    var timeLeft = 60;

     timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            // set textcontent of timer to show remaining seconds
            timerEl.textContent = 'Time: ' + timeLeft + ' seconds remaining';
            // decrease timeleft by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // when timeleft =1, rename to second instead of seconds
            timerEl.textContent = 'Time: ' + timeLeft + ' second remaning'
            timeLeft--;
        } else {
            // once time 0, set to empty string
            timerEl.textContent = '';
            // stop timer
            clearInterval(timeInterval);
            // display final form
            displayMessage();
        }
         //  loop for wrong answer choices
            for (var i=0; i < wrongA.length; i++) {
                wrongA[i].addEventListener('click', function () {
                    // decrement 5 seconds from timer
                    timeLeft--;
                    // display message to user that the answer was wrong
                    update.textContent = "Wrong! Watch the timer...";
                    // clear message after two seconds
                    setTimeout(function() {
                        update.textContent = '';
                    }, 2000);
                }) }
    },1000);
           // display form to submit initials
}

// final form
function displayMessage() {
    if (q1.style.display = "inline-block") {
        q1.style.display = "none";
    } if (q2.style.display = "inline-block") {
        q2.style.display = "none";
    } if (q3.style.display = "inline-block") {
        q3.style.display = "none";
    } if (q4.style.display = "inline-block") {
        q4.style.display = "none";
    } if (q5.style.display = "inline-block") {
        q5.style.display = "none";
    } if (form.style.display = "none") {
        form.style.display = "inline-block";
    }
    finalScore.textContent = "Your final score is " + score; 
}

// create play again button