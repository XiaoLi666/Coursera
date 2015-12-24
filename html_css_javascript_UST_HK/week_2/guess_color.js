/*
 Author: ZILI WANG
 Date: 23th Dec 2015
 */

// global variable
var color_list = ["blue","cyan","gold","gray","green","magenta","orange","red","white","yellow"];
// var color_hex_list = ["0000ff","00ffff","ffd700","c0c0c0","00ff00","ff00ff","ffa500","ff0000","ffffff","ffff00"];
var target_index;
var guess_number = 0;

// main function
function do_game() {
    // generate target color
    target_index = Math.floor((Math.random() * color_list.length)) + 1 // random number between [1, 10]

    // get user input
    var finished = false;
    while (!finished) {
        var color_input = prompt("I am thinking of one of these colors:\n\n" +
                                 color_list + "\n\n" +
                                 "What color am I thinking of?");
        guess_number++;
        finished = check_color(color_input);
    }

    update_bg_color(color_list[target_index]);
}

// other functions
function check_color(color) {
    var find_color = false;
    for (var i = 0; i < color_list.length; i++) {
        if (color == color_list[i]) {
            find_color = true;
            break;
        }
    }

    if (!find_color) {
        alert("Sorry, I don't recognize your color. \n\n" +
              "Please try again.");
    }
    else if (color > color_list[target_index]) {
        alert("Sorry, your guess is not correct. \n\n" +
              "Hint: your color is alphabetically higher than mine. \n\n" +
              "Please try again.");
    }
    else if (color < color_list[target_index]) {
        alert("Sorry, your guess is not correct. \n\n" +
              "Hint: your color is alphabetically lower than mine. \n\n" +
              "Please try again.");
    }
    else if (color == color_list[target_index]) {
        alert("Congratulations! You have guessed the color! \n\n" +
              "It took you " + guess_number +
              " guesses to finish the game!\n\n" +
              "You can see the color in the background");
        return true;
    }

    return false;
}

function update_bg_color(color) {
    document.body.style.backgroundColor = color;

    // workable on chrome, not workable on safari
    // document.getElementById("body").style.backgroundColor = color;
}
