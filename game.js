function startGame() {
    document.querySelector(".game").innerHTML = `
        <img class="question-photo" src="q1.jpeg" alt="Question 1 photo">

        <h2>Question 1</h2>

        <p>What did we do after we officially started dating?</p>

        <button onclick="answer1(true)">Ate burgers</button>
        <button onclick="answer1(false)">Ate pizza</button>
        <button onclick="answer1(false)">Had chai</button>
        <button onclick="answer1(false)">Didn't have anything</button>
    `;
}


function answer1(correct) {
    if (correct) {
        alert("CORRECT ANSWER TOOTSICUMS!");
        question2();
    } else {
        alert("Haw, galat hogya! Issok my love, try again!");
    }
}


function question2() {
    document.querySelector(".game").innerHTML = `
        <img class="question-photo q2-photo" src="q2.jpeg" alt="Question 2 photo">

        <h2>Question 2</h2>

        <p>When and where was our first proper date?</p>

        <button onclick="answer2(true)">22 October 2025, Chaitanya Restaurant</button>
        <button onclick="answer2(false)">19 October 2025, Chaitanya Restaurant</button>
        <button onclick="answer2(false)">23 October 2025, Chaitanya Restaurant</button>
        <button onclick="answer2(false)">24 October 2025, Chaitanya Restaurant</button>
    `;
}


function answer2(correct) {
    if (correct) {
        alert("CORRECT ANSWER TOOTSICUMS!");
        question3();
    } else {
        alert("Haw, galat hogya! Issok my love, try again!");
    }
}


function question3() {
    document.querySelector(".game").innerHTML = `
        <img class="question-photo" src="q3.jpeg" alt="Question 3 photo">

        <h2>Question 3</h2>

        <p>What did we do after Chaitanya?</p>

        <button onclick="answer3(false)">Dadar Chowpatty</button>
        <button onclick="answer3(false)">Shivaji Park</button>
        <button onclick="answer3(false)">Taxi to Grant Road</button>
        <button onclick="answer3(true)">All of the above</button>
    `;
}


function answer3(correct) {
    if (correct) {
        alert("CORRECT ANSWER TOOTSICUMS!");
        question4();
    } else {
        alert("Haw, galat hogya! Issok my love, try again!");
    }
}


function question4() {
    document.querySelector(".game").innerHTML = `
        <img class="question-photo" src="q4.jpeg" alt="Question 4 photo">

        <h2>Question 4</h2>

        <p>Where did we take our first proper photo together?</p>

        <button onclick="answer4(false)">Chaitanya Restaurant</button>
        <button onclick="answer4(false)">Dadar Beach</button>
        <button onclick="answer4(true)">Shivaji Park</button>
        <button onclick="answer4(false)">Refuge Area at Omkar</button>
    `;
}


function answer4(correct) {
    if (correct) {
        alert("CORRECT ANSWER TOOTSICUMS!");
        question5();
    } else {
        alert("Haw, galat hogya! Issok my love, try again!");
    }
}


function question5() {
    document.querySelector(".game").innerHTML = `
        <img class="question-photo" src="q5.JPG" alt="Question 5 photo">

        <h2>Question 5</h2>

        <p>What is one random memory from our first year that you still remember clearly?</p>

        <input type="text" id="answer5" placeholder="Type your answer...">

        <button onclick="answer5()">Submit</button>
    `;
}


function answer5() {
    const answer = document.getElementById("answer5").value;

    if (answer.trim() === "") {
        alert("You have to type something, silly!");
    } else {
        document.querySelector(".game").innerHTML = `
            <h2>OMG REALLY???</h2>

            <p>I LOVE THAT TOOOOOOO <3</p>

            <button onclick="question6()">Next</button>
        `;
    }
}


function question6() {
    document.querySelector(".game").innerHTML = `
        <img class="question-photo" src="q6.jpeg" alt="Question 6 photo">

        <h2>Question 6</h2>

        <p>What do we say to each other every night?</p>

        <button onclick="answer6(false)">GNSWDAM</button>
        <button onclick="answer6(false)">i love you so much, mwah/puchi</button>
        <button onclick="answer6(false)">Aschiiii/Eshoooo</button>
        <button onclick="answer6(true)">All of the above</button>
    `;
}


function answer6(correct) {
    if (correct) {
        alert("CORRECT ANSWER TOOTSICUMS!");
        question7();
    } else {
        alert("Haw, galat hogya! Issok my love, try again!");
    }
}


function question7() {
    document.querySelector(".game").innerHTML = `
        <img class="question-photo" src="q7.jpeg" alt="Question 7 photo">

        <h2>Question 7</h2>

        <p>What is our go-to spot when we have cravings?</p>

        <button onclick="answer7(false)">Taste of Kerela</button>
        <button onclick="answer7(false)">Bang Bang Noodles</button>
        <button onclick="answer7(true)">Chowman</button>
        <button onclick="answer7(false)">Chadda's</button>
    `;
}


function answer7(correct) {
    if (correct) {
        alert("CORRECT ANSWER TOOTSICUMS!");
        question8();
    } else {
        alert("Haw, galat hogya! Issok my love, try again!");
    }
}


function question8() {
    document.querySelector(".game").innerHTML = `
        <img class="question-photo" src="q8.jpeg" alt="Question 8 photo">

        <h2>Question 8</h2>

        <p>What tested our relationship the most during our first year?</p>

        <button onclick="answer8(false)">Getting used to each other's habits</button>
        <button onclick="answer8(false)">Learning each other's moods and triggerss</button>
        <button onclick="answer8(false)">Figuring out how to balance stuff together</button>
        <button onclick="answer8(true)">All of the above, but we pulled it off</button>
    `;
}


function answer8(correct) {
    if (correct) {
        alert("CORRECT ANSWER TOOTSICUMS!");
        question9();
    } else {
        alert("Haw, galat hogya! Issok my love, try again!");
    }
}


function question9() {
    document.querySelector(".game").innerHTML = `
        <img class="question-photo" src="q9.JPG" alt="Question 9 photo">

        <h2>Question 9</h2>

        <p>If you could go back to the beginning, knowing everything we've been through this year, would you choose me again?</p>

        <button onclick="answer9()">Yes, without a doubt</button>
        <button onclick="answer9()">Yes, but I'd change a few things</button>
        <button onclick="answer9()">I'd need to think about it</button>
        <button onclick="answer9()">No</button>
    `;
}


function answer9() {
    alert("I hope you know I'd choose you every single time. <3");
    question10();
}


function question10() {
    document.querySelector(".game").innerHTML = `
        <img class="question-photo" src="q10.JPG" alt="Question 10 photo">

        <h2>Question 10</h2>

        <p>What became one of our favourite things to do without really planning it?</p>

        <button onclick="answer10(false)">Going out for small walks</button>
        <button onclick="answer10(true)">Trying different restaurants together</button>
        <button onclick="answer10(false)">Going exploring together</button>
        <button onclick="answer10(false)">Watching movies at home on call</button>
    `;
}


function answer10(correct) {
    if (correct) {
        alert("CORRECT ANSWER TOOTSICUMS!");
        question11();
    } else {
        alert("Haw, galat hogya! Issok my love, try again!");
    }
}


function question11() {
    document.querySelector(".game").innerHTML = `
        <img class="question-photo" src="q11.jpeg" alt="Question 11 photo">

        <h2>Question 11</h2>

        <p>What is something about us that you didn't expect to become such a big part of our relationship?</p>

        <button onclick="answer11(false)">Our random conversations</button>
        <button onclick="answer11(true)">How comfortable we became with each other</button>
        <button onclick="answer11(false)">Our stupid little jokes</button>
        <button onclick="answer11(false)">The way we can spend hours together doing absolutely nothing</button>
    `;
}


function answer11(correct) {
    if (correct) {
        alert("CORRECT ANSWER TOOTSICUMS!");
        question12();
    } else {
        alert("Haw, galat hogya! Issok my love, try again!");
    }
}


function question12() {
    document.querySelector(".game").innerHTML = `
        <img class="question-photo" src="q12.jpeg" alt="Question 12 photo">

        <h2>Question 12</h2>

        <p>Which of these are some of the little things that made our first year special?</p>

        <button onclick="answer12(false)">Sitting at Marine Drive</button>
        <button onclick="answer12(false)">Exploring Grant Road</button>
        <button onclick="answer12(false)">Our random auto rides</button>
        <button onclick="answer12(true)">All of the above, plus spending hours on call</button>
    `;
}


function answer12(correct) {
    if (correct) {
        document.querySelector(".game").innerHTML = `
            <h1>We made it</h1>

            <p>12 months.</p>
            <p>So many memories.</p>
            <p>So many little moments that became ours.</p>
            <p>And somehow, we're still just getting started.</p>

            <h2>Happy 1st Anniversary, my love. <3</h2>
        `;
    } else {
        alert("Haw, galat hogya! Issok my love, try again!");
    }
}
