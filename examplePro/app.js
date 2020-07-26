var div1 = document.getElementById('div1');
console.log(div1);
var myH1 = 'Stop making fun of me Shonda'
div1.innerHTML = `<h1 class= "sans-serif"> ${myH1} </h1>`

div1.style.color = 'orange';
div1.style.backgroundColor = 'blue';

var sansSerif = document.getElementsByClassName("sans-serif");
console.log(sansSerif);

// sansSerif.style.fontFamily = "sans-serif";
// sansSerif.style.backgroundColor = "orange";

for (var i = 0; i< sansSerif.length; i++){

    sansSerif[i].style.fontFamily = "sans-serif";

    sansSerif[i].style.backgroundColor = "pink";
};

var paragraph = document.getElementsByTagName("p")
console.log(paragraph);

for(var j= 0; j < paragraph.length; j++){
    paragraph[j].classList.add("border-box");
}

function consoleValues () {
    var input1 = document.getElementById('input1').value;
    console.log(input1);
    var input2 = document.getElementById('input2').value;
    console.log(input2);
    var textArea1 = document.getElementById('textArea1').value;
    console.log(textArea1);
    var select1 = document.getElementById('select1').value;
    console.log(select1);
}
