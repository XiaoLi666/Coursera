var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");

function generateFaces() {
    // Need to create numberOfFaces faces on the left side
    for (var i = 0; i < 5; i++) {
        var img_element = document.createElement("img");
        var rand_top = Math.floor(Math.random() * 400);  // create rand top
        var rand_left = Math.floor(Math.random() * 400); // create rand left
        img_element.setAttribute("src","smile.png");
        // Important: top and left are attributes of style
        img_element.setAttribute("style","top:"+rand_top+"px;"+"left:"+rand_left+"px;");
        theLeftSide.appendChild(img_element);
    }
}
