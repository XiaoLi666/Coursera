// global variables
var rand_num = 0;
var guess_num = 0;
var finished = false;
var guesses = 0;

// main function
function do_game() {
    rand_num = Math.floor(Math.random() * 101) + 1; // [1, 100]
    console.log(rand_num);
    while (!finished) {
        guess_num = prompt("I am thinking of a number " +
                        "in the range 1 to 100.\n\n" +
                        "What is the number?");
        finished = check_guess(parseInt(guess_num));
        guesses += 1;
    }
}

// check input function
function check_guess(gn) {
    console.log(rand_num);
    if (isNaN(gn)) {
        alert("You have not entered a number.\n\n" +
              "Please enter a number in the range 1 to 100.");
        return false;
    }
    if (gn < 1 || gn > 100) {
        alert("Please enter a integer number in the range 1 to 100");
        return false;
    }
    if (gn < rand_num) {
        alert("Your number is too small!");
        return false;
    }
    if (gn > rand_num) {
        alert("Your number is too large!");
        return false;
    }
    alert("You got it! The number was " + gn +
          ".\n\n It took you " + guesses +
          " guesses to get the number!");
    return true;
}
