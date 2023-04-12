// define variables
var questions = document.getElementsByClassName("question");
var startButton = document.getElementById('startButton');
var startPage = document.getElementById('startPage');
var q1 = document.getElementById('q1');

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

    q1.children.addEventListener('click', function () {

    }
    );
});

// create timer function
// subtract time when answer wrong