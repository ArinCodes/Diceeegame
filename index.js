var randomnumber1=Math.floor(Math.random()*6)+1;

var randomdiceimg="dice"+ randomnumber1 +".png";//dice 1 to 6 png

var randomimgsrc= "images/"+ randomdiceimg;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimgsrc);

var randomnumber2=Math.floor(Math.random()*6)+1;


var randomimgsrc2 = "images/dice"+ randomnumber2 +".png";

 document.querySelectorAll("img")[1].setAttribute("src",randomimgsrc2);

if(randomnumber1>randomnumber2){
document.querySelector("h1").innerHTML="<e> 🚩Player 1 wins! </e>";


}
else{
  document.querySelector("h1").innerHTML="<e> 🚩Player 2 wins!  </e> "
}
