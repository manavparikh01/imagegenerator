/*var genButton = document.querySelector("#generate");
var textPart = document.querySelector("#textpart");
var imagePart = document.querySelector("#imagepart");
var num = 0;
var num1 = 0;
var catImg = document.querySelector("#img");


genButton.addEventListener("click", function() {
    num = random();
    if (num !== num1) {
        var catNum = "assests/images/cat" + num + ".jpg";
        catImg.setAttribute("src", catNum);
    }
    else {
        num = num + 1;
        var catNum = "assests/images/cat" + num + ".jpg";
        catImg.setAttribute("src", catNum);
    }
    num1 = num;
    
});

function random() {
    var ranNum = Math.round(Math.random()*25);
    return ranNum
};*/

if ($("#generate").on("dblclick")) {
    $("#generate").on("dblclick", function() {
        let numa = random();
        let numb = random1();
        if (numa !== numb) {
            
            let catNum1 = "assests/images/cat" + numb + ".jpg";
            
            $(".firstdiv").css("flex-basis", "50%");
            $("#imgdouble").attr("src", catNum1);
            $(".seconddiv").css("flex-basis", "50%");
        }
        else {
            numb = numa + 1;
            
            let catNum1 = "assests/images/cat" + numb + ".jpg";
            
            $(".firstdiv").css("flex-basis", "50%");
            $("#imgdouble").attr("src", catNum1);
            $(".seconddiv").css("flex-basis", "50%");
        }
    });
}

if ($("#generate").on("click")) {
    $("#generate").on("click", function() {
        let num1 = 0;
        let num = random();
        if (num !== num1) {
            let catNum = "assests/images/cat" + num + ".jpg";
            $("#img").attr("src", catNum);
            $(".firstdiv").css("flex-basis", "100%");
            $(".seconddiv").css("flex-basis", "0%");
        }
        else {
            num = num + 1;
            let catNum = "assests/images/cat" + num + ".jpg";
            $("#img").attr("src", catNum);
            $(".firstdiv").css("flex-basis", "100%");
            $(".seconddiv").css("flex-basis", "0%");
        }
        num1 = num;
    });
}



function random() {
    var ranNum = Math.round(Math.random()*25);
    return ranNum
};

function random1() {
    var ranNum1 = Math.round(Math.random()*25);
    return ranNum1
}
