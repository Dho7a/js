function boldText(){
    var target = document.getElementById("TextArea");
    if( target.style.fontWeight == "bolder" ) {
        target.style.fontWeight = "normal";
    } else {
        target.style.fontWeight = "bolder";
    }
}



function italicText(){
    var target = document.getElementById("TextArea");
    if( target.style.fontStyle == "italic" ) {
        target.style.fontStyle = "normal";
    } else {
        target.style.fontStyle = "italic";
    }
}

function underlineText(){
    var target = document.getElementById("TextArea");
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
    } else {
        target.style.textDecoration = "underline";
    }
}
     function changeFont(font){
        document.getElementById("editor1").style.fontFamily = font.value;
    }
function myFunction(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("editor1").style.fontSize = listValue;
}