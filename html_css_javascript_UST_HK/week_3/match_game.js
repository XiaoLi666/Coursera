var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0]; // document.getElementById("theBody");

function generateFaces() {
    // Need to create numberOfFaces faces on the left side
    for (var i = 0; i < numberOfFaces; i++) {
        var img_element = document.createElement("img");
        var rand_top = Math.floor(Math.random() * 400);  // create rand top
        var rand_left = Math.floor(Math.random() * 400); // create rand left
        img_element.setAttribute("src","smile.png");
        // Important: top and left are attributes of style
        img_element.setAttribute("style","top:"+rand_top+"px;"+"left:"+rand_left+"px;");
        theLeftSide.appendChild(img_element);
    }

    // Copy left hand side to right hand side
    leftSideImages = theLeftSide.cloneNode(true);
    // This is how to remove the last child
    var child_to_remove = leftSideImages.childNodes[leftSideImages.childNodes.length-1];
    leftSideImages.removeChild(child_to_remove);
    theRightSide.appendChild(leftSideImages);

    // Add event handler to the last node of the left child
    theLeftSide.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        numberOfFaces += 5;
        // Delete all left nodes
        while (theLeftSide.firstChild) {
            theLeftSide.removeChild(theLeftSide.firstChild);
        }
        // Delete all right nodes
        while (theRightSide.firstChild) {
            theRightSide.removeChild(theRightSide.firstChild);
        }
        generateFaces();
    }
}

theBody.onclick = function gameOver() {
    console.log("clicked the body");
    alert("Game Over!");
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
};
