// define variables
var questions = document.getElementsByClassName("question");
var startButton = document.getElementById('startButton');
var startPage = document.getElementById('startPage');
var q1 = document.getElementById('q1');

var timerEl = document.getElementById('timer');
var wrongUpdate = document.getElementById('wrongUpdate');

var wrongA = document.getElementsByClassName ('wrong');

var correctA1 = document.getElementById('correct1');
var correctA2 = document.getElementById('correct2');
var correctA3 = document.getElementById('correct3');
var correctA4 = document.getElementById('correct4');

var button = document.querySelectorAll('button');

// add eventlistener to start button
startButton.addEventListener('click', function () {

    // start timer
    timer();

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


// create timer function
function timer() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            // set textcontent of timer to show remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // decrease timeleft by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // when timeleft =1, rename to second instead of seconds
            timerEl.textContent = timeLeft + ' second remaning'
            timeLeft--;
        } else {
            // once time 0, set to empty string
            timerEl.textContent = '';
            // stop timer
            clearInterval(timeInterval);
        }
         //  loop for wrong answer choices
            for (var i=0; i < wrongA.length; i++) {
                wrongA[i].addEventListener('click', function () {
                    // decrement 5 seconds from timer
                    timeLeft--;
                    // display message to user that the answer was wrong
                    wrongUpdate.textContent = "Wrong! Watch the timer...";
                    // clear message after two seconds
                    setTimeout(function() {
                        wrongUpdate.textContent = '';
                    }, 2000);
                }) }
    },1000);
           // display form to submit initials
            // displayMessage();
}

// display final form
function displayMessage() {

}